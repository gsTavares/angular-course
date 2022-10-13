import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/models/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar!';

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {

    /**
     * Course use's form data content type for this request,
     * but my API has JSON as default request/respose content type
     * so I'm sending the entire moment to the service, since he's already a JSON object
     */

    // const formData: FormData = new FormData();
    // formData.append('title', moment.title);
    // formData.append('description', moment.description);

    // if(moment.image) {
    //   formData.append('image', moment.image);
    // }

    await this.momentService.createMoment(moment).subscribe();
  }

}
