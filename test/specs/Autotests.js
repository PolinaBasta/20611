// describe('Verify General', () => {
//     it('webpage should have the right title', () => {
//         browser.url('https://likejean.github.io/homework-5/');
//         const actualTitle = browser.getTitle();
//         const expectedTitle = 'Complex Counter App';
//         expect(actualTitle).toEqual(expectedTitle);
//         //browser.pause(5000);
//     });
//     it('the header should have the right title Counters', () => {
//         const element = $('//h1[@class=\'header\']');
//         const text = element.getText();
//         const expected = 'Counters';
//         expect(text).toEqual(expected);
//         //browser.pause(5000);
//     });
// })

describe ('Test CCA', () =>{
    it('Verify that a header exists on the top of the page and its named as Counters', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const title = $("//h1[@class = 'header']");
        expect(title.getText()).toEqual('Counters');

    it('Verify that a header exists on the top of the page and its named as Counters', function () {
         browser.url('https://likejean.github.io/homework-5/');
         const counterName = $("//input[@name = 'name']");
         expect(counterName.getAttribute('value')).toEqual('Counter Name');
        });

    it('Verify that a header exists on the top of the page and its named as Counters', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const initialCount = $("//input[@name = 'value']");
        expect(initialCount.getAttribute('value')).toEqual('50');
    });

    });

    //

