import {AppComponent} from './app.component';
import {async, TestBed} from '@angular/core/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {TaskModule} from './components/task.module';
import {TasksState} from './state/task.state';
import {InboxScreenComponent} from './components/inbox-screen-component';
import {PureInboxScreenComponent} from './components/pure-inbox-screen.component';

describe('App', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, InboxScreenComponent, PureInboxScreenComponent],
      imports: [TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
