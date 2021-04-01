import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageRoutingModule} from './message-routing.module';
import {MessageComponent} from './message/message.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [MessageComponent],
    imports: [
        CommonModule,
        MessageRoutingModule,
        IonicModule,
        FormsModule
    ]
})
export class MessageModule {
}
