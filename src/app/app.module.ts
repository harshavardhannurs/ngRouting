import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { ServersService } from './services/servers.service';
import { UsersService } from './services/users.service';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { AuthService } from './services/auth-service.service';
import { ActivateGuard } from './services/activate-guard.service';
import { DeactivateGuard } from './services/deactivate-guard.service';
import { Resolver } from './services/resolver.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, UsersService, AuthService, ActivateGuard, DeactivateGuard, Resolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
