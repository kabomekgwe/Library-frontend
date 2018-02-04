import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookToReturnComponent } from './book-to-return.component';

describe('BookToReturnComponent', () => {
  let component: BookToReturnComponent;
  let fixture: ComponentFixture<BookToReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookToReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookToReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
