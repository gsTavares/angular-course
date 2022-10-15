import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/models/Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

import { faTimes, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?: Moment;
  faTimes: IconDefinition = faTimes;
  faEdit: IconDefinition = faEdit;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.momentService.getMomentById(id).subscribe(response => {
      this.moment = response.body;
    })
  }

  async removeHandler(id: number) {
    await this.momentService.deleteMomentByid(id).subscribe(response => {
      this.messagesService.add(response.messages[0]);
    });
    this.router.navigate(["/"]);
  }

}
