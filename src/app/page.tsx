'use client'

import { LanguageSelect, useTranslation } from 'rtk-translate'

export default function Home() {
  const { validLanguages, currentLanguage, setCurrentLanguage, translateText } = useTranslation();
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-8 space-y-12">
      <div className="self-start w-full flex items-center space-x-4 justify-center">
        <LanguageSelect
          selected={currentLanguage}
          onChange={setCurrentLanguage}
          availableLanguages={validLanguages}
        // showSearchInput={false}
        // isNameVisible={false}
        />
      </div>

      <header className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2 flex-wrap text-center">{translateText('titleHero')}<strong>RTK-Translate</strong>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="#ffffff"><path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" /></svg>
        </h1>
        <p className="text-lg text-gray-600">{translateText('subtitleHero')}</p>
        <p>{translateText('descriptionHero')}</p>
      </header>

      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full">
        <div className="p-6 border rounded shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">{translateText('titleCardOne')}</h2>
          <p className="text-gray-600">{translateText('descriptionCardOne')}</p>
        </div>
        <div className="p-6 border rounded shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">{translateText('titleCardTwo')}</h2>
          <p className="text-gray-600">{translateText('descriptionCardTwo')}</p>
        </div>
        <div className="p-6 border rounded shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">{translateText('titleCardThree')}</h2>
          <p className="text-gray-600">{translateText('descriptionCardThree')}
            <a href='https://www.npmjs.com/package/react-flag-kit' target='_blank' className='text-blue-500 transition-all ease-linear duration-200 hover:border-b'> react-flag-kit</a>
          </p>
        </div>
        <div className="p-6 border rounded shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">{translateText('titleCardFour')}</h2>
          <p className="text-gray-600">{translateText('descriptionCardFour')}</p>
        </div>
      </section>

      <footer className="w-full border-t p-6 mt-12">
        <div className="flex justify-center items-center flex-col space-y-4 text-center">
          <p className="text-gray-600">{translateText('textFooterComunity')} ❤️</p>
          <a href="https://github.com/seu-repo/rtk-translate" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{translateText('textFooterRepository')}</a>
        </div>
      </footer>
    </main>
  )
}
