// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


const { remote } = require('webdriverio');


const addUserNameAndPassword = (userName, password) => {
  const emailLogin = document.querySelector('[name="email"]')
  emailLogin.value = userName
  const passwordLogin = document.querySelector('[name="password"]')
  passwordLogin.value = password
}

// const loginForm = document.querySelector('[name="loginForm"]')
// loginForm.submit()

const loginToAllo = () => {
  const clickButton = document.querySelector('[aria-label="LOG IN"]')
  clickButton.click()
};

const moveToWhiteBoardResource = () => {
  document.location.href = "https://nirvana.alloc8global.com/jobs/whiteboard/resource";
}

const selectDates = () => {
  const dateSelector = document.querySelector('[aria-label="Select Date"]')
  dateSelector.click()
}


const selectMonthAndYear = (date) => {
  const previousMonth = document.querySelector('[aria-label="previous month"]')
  const theMonth = document.querySelector(".mdp-calendar-monthyear")
  while (theMonth.textContent !== date) {
    previousMonth.click()
  }
}

const selectCorrectDay = (x) => {
  const dateArray = document.querySelectorAll('[class="ng-binding ng-scope"]')

  dateArray.forEach ((element) => {
    if (element.textContent === x) {
      element.click()
    }
  })
}

const clickOk = () => {
  const ok = document.querySelector("[aria-label='OK']")
  ok.click()
}

const findUser = (user) => {
  const findBoolean = window.find(user)
  if (findBoolean) {

  }
}

addUserNameAndPassword("tjt_84@hotmail.com", "ABC123$estest")
loginToAllo()
moveToWhiteBoardResource()
selectDates()
selectMonthAndYear("October 2020")
selectCorrectDay("20")
clickOk()
findUser("gains")


const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://webdriver.io')

    const apiLink = await browser.$('=API')
    await apiLink.click()

    await browser.saveScreenshot('./screenshot.png')
    await browser.deleteSession()
})()

// const WebDriver = require('webdriver');

// (async () => {
//     const client = await WebDriver.newSession({
//         capabilities: { browserName: 'chrome' }
//     })

//     await client.navigateTo('https://nirvana.alloc8global.com/')

//     // const searchInput = await client.findElement('css selector', '#lst-ib')
//     // await client.elementSendKeys(searchInput['element-6066-11e4-a52e-4f735466cecf'], 'WebDriver')

//     // const searchBtn = await client.findElement('css selector', 'input[value="Google Search"]')
//     // await client.elementClick(searchBtn['element-6066-11e4-a52e-4f735466cecf'])

//     // console.log(await client.getTitle()) // outputs "WebDriver - Google Search"

//     await client.deleteSession()
// })()


// ;(async () => {
//     const browser = await remote({
//         capabilities: {
//             browserName: 'chrome'
//         }
//     })

//     await browser.url('https://nirvana.alloc8global.com/')

//     await browser.deleteSession()
// })()
