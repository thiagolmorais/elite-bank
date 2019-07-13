import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Deveria chamar o método de login', () => {
        fakeAsync(() => {
            fixture.detectChanges();
            // spyOn(component,'OnSubmit');
            element = fixture.debugElement.query(By.css('Entrar')).nativeElement;
            element.click();
            // expect(component).toHaveBeenCalledTimes(0);
        });
    });

    it('Botão enviar deveria ficar inválido', async(() => {
        component.loginData.account = null;
        component.loginData.password = [];
        expect(fixture.debugElement.query(By.css('Entrar')).nativeElement.style.disabled).toBeTruthy();
    }));

    it('Botão enviar deveria ficar válido', async(() => {
        component.loginData.account = 123456;
        component.loginData.password = [1, 2], [3, 4], [5, 6], [7, 8], [9, 0];
        expect(fixture.debugElement.query(By.css('Entrar')).nativeElement.style.disabled).toBeFalsy();
    }));
});
