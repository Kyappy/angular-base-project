import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
	// region global
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	// endregion

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				RouterTestingModule
			]
		}).compileComponents().catch(() => {
			throw new Error('AppComponent test initialization failure');
		});

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	}));

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as title 'angular-base-project'`, () => {
		expect(component.title).toEqual('angular-base-project');
	});

	it('should render title in a h1 tag', () => {
		fixture.detectChanges();
		const ELEMENT: Element = fixture.debugElement.nativeElement;
		expect(ELEMENT.querySelector('h1').textContent).toContain('Welcome to angular-base-project!');
	});
});
