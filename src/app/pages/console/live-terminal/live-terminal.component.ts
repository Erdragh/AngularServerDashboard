import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { TerminalMessageModule } from './terminal-message.model';

@Component({
  selector: 'app-live-terminal',
  templateUrl: './live-terminal.component.html',
  styleUrls: ['./live-terminal.component.scss']
})
export class LiveTerminalComponent implements OnInit, AfterViewInit {

  terminalForm: FormGroup = new FormGroup({
    textInput: new FormControl(null)
  })

  @ViewChild('messagesDiv') messagesDiv: ElementRef;

  messages: TerminalMessageModule[] = [
    new TerminalMessageModule(new Date(), "Test Message", 'error'),
    new TerminalMessageModule(new Date(), "Test Message 2", 'warning'),
    new TerminalMessageModule(new Date(), "This is another test message", 'success'),
    new TerminalMessageModule(new Date(), "This is another test message, too")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

  addMessage(message: TerminalMessageModule) {
    this.messages.push(message);
    setTimeout(() => {
      this.messagesDiv.nativeElement.scrollTop = this.messagesDiv.nativeElement.scrollHeight;
    }, 1);
  }

  onSubmit() {
    // console.log(this.terminalForm);
    this.addMessage(new TerminalMessageModule(new Date(), this.terminalForm.value.textInput));
    this.terminalForm.reset();
  }

}
