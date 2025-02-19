import { Inject,Component, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  test: Date = new Date();

  constructor(@Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit() {}
  goToUrl(url) {
    this.document.location.href = url;
  }
}
