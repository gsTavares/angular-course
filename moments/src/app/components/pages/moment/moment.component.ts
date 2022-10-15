import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/models/Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';
import { CommentService } from 'src/app/services/comment.service';

import { faTimes, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?: Moment;
  faTimes: IconDefinition = faTimes;
  faEdit: IconDefinition = faEdit;

  commentForm!: FormGroup;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private commentService: CommentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.momentService.getMomentById(id).subscribe(response => {
      this.moment = response.body;
    })

    this.commentForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required])
    });
  }

  async removeHandler(id: number) {
    await this.momentService.deleteMomentByid(id).subscribe(response => {
      this.messagesService.add(response.messages[0]);
    });
    this.router.navigate(["/"]);
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if(this.commentForm.invalid) {
      return;
    }

    const data: Comment = this.commentForm.value;

    data.moment = {} as Moment;

    console.log(data);
    

    console.log(this.moment);
    data.moment!.id = this.moment!.id;

    await this.commentService.createComment(data).subscribe(response => {
      this.moment!.comments!.push(response.body);
      this.messagesService.add(response.messages[0]);
    });

    // Resets the form and model
    this.commentForm.reset();
    formDirective.resetForm();
  }

  get text() {
    return this.commentForm.get("text")!;
  }

  get username() {
    return this.commentForm.get("username")!;
  }

}
