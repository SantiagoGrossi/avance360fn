import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/services/auth/auth.service";
import { CanchaService } from "src/app/services/cancha/cancha.service";
@Component({
  selector: 'get-all-canchas',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {
  canchas: any;
  constructor(private canchaService: CanchaService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.canchaService.getCanchaById().subscribe((data:any) => {
      this.canchas = data;
      console.log(data)
    }, err => { 
      this.toastr.error("No se pudieron obtener las canchas porque pasó algo");
    });
}

}
