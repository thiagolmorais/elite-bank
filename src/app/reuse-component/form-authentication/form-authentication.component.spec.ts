import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FormAuthenticationComponent } from './form-authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Login } from 'src/model/login';
import { DigitOnlyDirective } from 'src/directives/digit-only.directive';

fdescribe('FormAuthenticationComponent', () => {
    let component: FormAuthenticationComponent;
    let fixture: ComponentFixture<FormAuthenticationComponent>;
    let element: HTMLElement;
    // Input elements
    let loginData: Login = { account: null, password: [] };
    let dataLoading: Boolean = false;
    let errorMessage: String = "";
    // Input elements - END
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormAuthenticationComponent, DigitOnlyDirective],
            imports: [FormsModule, ReactiveFormsModule,],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormAuthenticationComponent);
        component = fixture.componentInstance;
        component.loginData = loginData;
        component.dataLoading = dataLoading;
        component.errorMessage = errorMessage;
        fixture.detectChanges();
    });

    it('O botão de enviar deveria ficar habilitado', fakeAsync(() => {
        let fixture = TestBed.createComponent(FormAuthenticationComponent);
        const component = fixture.componentInstance;
        component.loginData = loginData;
        fixture.detectChanges();
        component.loginData.account = 123456;
        component.password = "123456";
        fixture.detectChanges();

        let element = fixture.debugElement.query(By.css('.btnSubmit')).nativeElement;
        fixture.whenStable().then(() => {
            expect(component.ngForm.form.status).toBe('VALID');
        });
    }));

    it('O botão de enviar deveria ficar desabilitado', fakeAsync(() => {
        let fixture = TestBed.createComponent(FormAuthenticationComponent);
        const component = fixture.componentInstance;
        component.loginData = loginData;
        fixture.detectChanges();
        component.loginData.account = null;
        component.password = "123456";
        fixture.detectChanges();

        let element = fixture.debugElement.query(By.css('.btnSubmit')).nativeElement;
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.ngForm.form.status).toBe('INVALID');
        });
    }));

    it('Deveria incrementar e decrementar a variável de password', () => {
        let fixture = TestBed.createComponent(FormAuthenticationComponent);
        const component = fixture.componentInstance;
        component.loginData = loginData;
        fixture.detectChanges();
        for (let i = 0; i < 6; i++) {
            component.addPasswordNumber(0);
        }
        component.deletePassword();
        fixture.detectChanges();
        expect(component.password.length).toBe(5);
    });

    it('A mensagem de erro deveria aparecer', fakeAsync(() => {
        let fixture = TestBed.createComponent(FormAuthenticationComponent);
        const component = fixture.componentInstance;
        component.loginData = loginData;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            component.errorMessage = "Teste de erro";
            fixture.detectChanges();
            let alert = fixture.debugElement.query(By.css('.alert')).nativeElement;
            expect(alert.textContent).toContain('Teste de erro');
        });
    }));
});
