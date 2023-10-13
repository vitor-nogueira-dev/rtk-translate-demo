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
