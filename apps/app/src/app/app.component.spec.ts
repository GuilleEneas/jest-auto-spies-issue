import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Spy, provideAutoSpy } from 'jest-auto-spies';
import { OneService } from './one.service';

describe('AppComponent', () => {
  let componentUnderTest: AppComponent;
  let oneServiceSpy: Spy<OneService>;

  let actualResult: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        provideAutoSpy(OneService, { gettersToSpyOn: ['myGetter'] }),
      ],
    });

    componentUnderTest = TestBed.inject(AppComponent);
    oneServiceSpy = TestBed.inject<any>(OneService);

    actualResult = undefined;
  });

  it('test getter', () => {
    const fakeResult = { fake: 'result' };
    oneServiceSpy.accessorSpies.getters.myGetter.mockReturnValue(fakeResult);

    actualResult = componentUnderTest.testGetter();

    expect(actualResult).toStrictEqual(fakeResult);
  });
});
