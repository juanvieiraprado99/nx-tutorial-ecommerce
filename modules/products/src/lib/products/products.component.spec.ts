import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('chamar send quando clicar no botão', () => {
    jest.spyOn(component, 'send');
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.send).toHaveBeenCalled();
  });

  it('chamar send com valor correto quando clicar no botão', () => {
    jest.spyOn(component, 'send');
    component.control.setValue('teste');
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.send).toHaveBeenCalledWith('teste');
  });
});
