import { Injectable } from '@angular/core';
import { Requirement } from '../model/requirement';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CreateAProjectService {

  private dbPath = '/requirements';

  requirementRef: AngularFirestoreCollection<Requirement> = null;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.requirementRef = db.collection(this.dbPath);
    afAuth.user.subscribe((usr) => {
      this.dbPath += '/' + usr.uid;
    });
  }

  createRequirement(requirement: Requirement): void {
    this.requirementRef.add({ ...requirement });
  }

  getRequirementList(): AngularFirestoreCollection<Requirement> {
    return this.requirementRef;
  }

}
