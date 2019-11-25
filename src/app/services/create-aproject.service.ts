import { Injectable } from '@angular/core';
import { Requirement } from '../model/requirement';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateAProjectService {

  private dbPath = '/requirements';

  private requirementRef: AngularFirestoreCollection<Requirement>;
  requirements: Observable<Requirement[]>;

  public selected = {
    key: null,
    title: '',
    type: '',
    price: '',
    description: '',
  };

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.requirementRef = db.collection(this.dbPath);
    this.requirements = this.requirementRef.snapshotChanges().pipe(
      map(changes => changes.map(i => {
        const data = i.payload.doc.data() as Requirement;
        const key = i.payload.doc.id;
        return { key, ...data };
      }))
    );
  }

  getAllRequirements() {
    return this.requirements;
  }

  createRequirement(requirement: Requirement): void {
    this.db.collection("requirements/").doc((Math.round(new Date().getTime() / 1000) + "-" + Math.floor((1000 + Math.random() * 9999)).toString()).toString()).set({ ...requirement });
  }

  async updateRequirement(requirement: Requirement) {
    return await this.requirementRef.doc(requirement.key).update(requirement);
  }

  deleteRequirement(id: string) {
    return this.requirementRef.doc(id).delete();
  }

}
