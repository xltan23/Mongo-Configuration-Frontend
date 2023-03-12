import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Member, ServerResponse } from "./models";

@Injectable()
export class MemberService {

    // CONSTRUCTOR
    constructor(private http:HttpClient) {}

    // METHOD to post member to server
    postMember(member:Member):Promise<ServerResponse> {
        const form = new FormData()
        form.set("name",member.name)
        form.set("telegram",member.telegram)
        form.set("grade",member.grade)
        return firstValueFrom(this.http.post<ServerResponse>('https://configmongo-production.up.railway.app/member/add',form))
    }

    // METHOD to get member from server
    getMember(telegram:string):Promise<ServerResponse> {
        return firstValueFrom(this.http.get<ServerResponse>(`https://configmongo-production.up.railway.app/member/${telegram}`))
    }
}