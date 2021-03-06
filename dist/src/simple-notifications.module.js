var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNotificationsComponent } from './simple-notifications/components/simple-notifications.component';
import { NotificationComponent } from './simple-notifications/components/notification.component';
import { MaxPipe } from './simple-notifications/pipes/max.pipe';
import { NotificationsService } from './simple-notifications/services/notifications.service';
export * from './simple-notifications/interfaces/icons';
export * from './simple-notifications/components/simple-notifications.component';
export * from './simple-notifications/components/notification.component';
export * from './simple-notifications/pipes/max.pipe';
export * from './simple-notifications/services/notifications.service';
var SimpleNotificationsModule = (function () {
    function SimpleNotificationsModule() {
    }
    SimpleNotificationsModule_1 = SimpleNotificationsModule;
    SimpleNotificationsModule.forRoot = function () {
        return {
            ngModule: SimpleNotificationsModule_1,
            providers: [NotificationsService]
        };
    };
    SimpleNotificationsModule = SimpleNotificationsModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                SimpleNotificationsComponent,
                NotificationComponent,
                MaxPipe
            ],
            exports: [SimpleNotificationsComponent]
        })
    ], SimpleNotificationsModule);
    return SimpleNotificationsModule;
    var SimpleNotificationsModule_1;
}());
export { SimpleNotificationsModule };
//# sourceMappingURL=simple-notifications.module.js.map