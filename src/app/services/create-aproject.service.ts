import { Injectable } from "@angular/core";
import { Requirement } from "../model/requirement";
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CreateAProjectService {
  private dbPath = "/requirements";
  // endpoint = 'https://playground-238510.appspot.com/';
  endpoint = "http://localhost:3000/";
  public requirementRef: AngularFirestoreCollection<Requirement>;
  public requirements: Observable<Requirement[]>;

  public selected = {
    key: null,
    title: "",
    description: "",
    type: "",
    price: "",
    ownerId: "",
  };

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    public http: HttpClient
  ) {
    // this.requirementRef = db.collection(this.dbPath);
    // this.requirements = this.requirementRef.snapshotChanges().pipe(
    //   map(changes => changes.map(i => {
    //     const data = i.payload.doc.data() as Requirement;
    //     const key = i.payload.doc.id;
    //     return { key, ...data };
    //   }))
    // );
  }

  // getAllRequirements() {
  //   return this.requirements;
  // }
  getPartial(page) {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.endpoint + "project/all/" + page + "/5")
        .subscribe((data) => {
          const record = data as Array<any>;
          resolve(
            record.map((entity) => {
              return {
                ...entity,
                key: entity.id,
              };
            })
          );
        });
    });
  }
  countRequirement() {
    return new Promise<number>((resolve, reject) => {
      this.http
        .get(this.endpoint + "project/quantity")
        .subscribe((data) => resolve(parseInt(data.toString())));
    });
  }

  createRequirement(requirement: Requirement): void {
    this.http
      .post(this.endpoint + "project/create", {
        title: requirement.title,
        type: requirement.type,
        price: requirement.price,
        description: requirement.description,
        ownerId: requirement.ownerId,
      })
      .subscribe((res) => {
        console.log(res);
      });
    // tslint:disable-next-line: max-line-length
    // this.db.collection('requirements/').doc((Math.round(new Date().getTime() / 1000) + '-' + Math.floor((1000 + Math.random() * 9999)).toString()).toString()).set({ ...requirement });
  }

  async updateRequirement(requirement: Requirement, onResult) {
    console.log(requirement.key);
    this.http
      .post(this.endpoint + "project/update", {
        key: requirement.key,
        title: requirement.title,
        type: requirement.type,
        price: requirement.price,
        description: requirement.description,
        uid: this.afAuth.auth.currentUser.uid, // Xét ownerId hiện tại khớp với id của item cần update thì sẽ hợp lệ
      })
      .subscribe((res) => {
        onResult(res); // trả về kết quả và xuất thông báo
      });
    // return await this.requirementRef.doc(requirement.key).update(requirement);
  }

  deleteRequirement(requirement: Requirement, onResult) {
    console.log(requirement);
    this.http
      .post(this.endpoint + "project/delete", {
        uid: this.afAuth.auth.currentUser.uid, // Xét ownerId hiện tại khớp với id của item cần xóa thì sẽ hợp lệ
        key: requirement.key,
      })
      .subscribe((res) => {
        onResult(res);
      });
    // return this.requirementRef.doc(id).delete();
  }
}
