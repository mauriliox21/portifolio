import { BehaviorSubject, Observable } from "rxjs";
import { Tech } from "../../model/tech.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class TechObservableService{
    private tech = new BehaviorSubject<Tech|undefined>(undefined);

    constructor(){
        this.tech.next(undefined);
    }

    public setTech(tech: Tech){
        this.tech.next(tech);
    }

    public getTech(): Observable<Tech|undefined>{
        return this.tech.pipe();
    }
}