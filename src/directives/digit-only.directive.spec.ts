import { DigitOnlyDirective } from './digit-only.directive';
import { ElementRef, Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    template: `<input type="text" appDigitOnly>`
})

class TestAppDigitOnlyComponent {

}

describe('DigitOnlyDirective', () => {
    let component: TestAppDigitOnlyComponent;
    let fixture: ComponentFixture<TestAppDigitOnlyComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DigitOnlyDirective, TestAppDigitOnlyComponent]
        });
        fixture = TestBed.createComponent(TestAppDigitOnlyComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
    });
});
