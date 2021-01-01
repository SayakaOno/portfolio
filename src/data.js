import React from 'react';
import imageSearch from './img/image-search.jpg';
import imageSearchGif1 from './img/image-search1.gif';
import imageSearchGif2 from './img/image-search2.gif';
import inuneko from './img/inuneko.jpg';
import translator from './img/translator.jpg';
import translatorGif1 from './img/translator1.gif';
import translatorGif2 from './img/translator2.gif';
import footprintCalculator from './img/footprint-calculator.jpg';
import footprintCalculatorGif from './img/footprint-calculator.gif';
import japaneseTraining from './img/japanese-speaking-training.jpg';
import japaneseTrainingGif from './img/japanese-speaking-training.gif';

export const introduction = ['Thorough', 'Goal-Driven', 'Motivated'];

export const about = {
  new: {
    en: {
      title: (
        <span>
          I am a <strong>React developer</strong> who:
        </span>
      ),
      bullet: [
        {
          header: (
            <React.Fragment>
              is <strong>analytical</strong> and{' '}
              <strong>pays attention to detail</strong>
            </React.Fragment>
          ),
          detail: 'I love to dig into things and solve problems.'
        },
        {
          header: (
            <React.Fragment>
              is obsessed with <strong>getting things done</strong>
            </React.Fragment>
          ),
          detail: "I don't like giving up."
        },
        {
          header: (
            <React.Fragment>
              loves a <strong>challenging environments</strong>
            </React.Fragment>
          ),
          detail: 'I would love to get my hands dirty to grow faster!'
        },
        {
          header: (
            <React.Fragment>
              loves to <strong>make people happier</strong>
            </React.Fragment>
          ),
          detail: 'It makes me happier as well.'
        },
        {
          header: (
            <React.Fragment>
              loves <strong>being a developer</strong>
            </React.Fragment>
          ),
          detail: 'Because I can enjoy my life and make people happier!'
        },
        {
          header: (
            <React.Fragment>
              loves <strong>eating out</strong>
            </React.Fragment>
          ),
          detail: 'and taking pictures of dishes with my mirrorless camera.'
        }
      ]
    }
  },
  skills: {
    en: 'Skills',
    ja: 'スキル'
  },
  sortedSkills: {
    Frontend: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3'],
    Backend: [
      'Node.js',
      'RESTful API',
      'GraphQL',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'PHP'
    ],
    others: ['WordPress', 'Sass', 'Java', 'Android']
  }
};

export const mySkills = [
  'JavaScript',
  'React',
  'Redux',
  'PHP',
  'Java',
  'MySQL',
  'MongoDB',
  'Android',
  'HTML5',
  'CSS3',
  'WordPress',
  'jQuery',
  'Bootstrap'
];

export const contactData = {
  send: {
    en: 'Send',
    ja: '送信'
  },
  description: {
    en: (
      <p className="col-12">
        I would love to hear from you!
        <br />
        Please fill out the form to send me an email.
      </p>
    ),
    ja: (
      <p className="col-12">
        どんなことでも、お気軽にご連絡いただけますと嬉しいです。
      </p>
    )
  },
  name: {
    en: 'Name',
    ja: 'お名前'
  },
  email: {
    en: 'Email',
    ja: 'Email'
  },
  message: {
    en: 'Message',
    ja: 'メッセージ'
  }
};

export const portfolio = {
  summary: {
    en: 'Summary',
    ja: '概要'
  },
  episode: {
    en: 'How was this born?',
    ja: 'アプリが生まれた背景'
  }
};

const portfolioDetail = [
  {
    order: 1,
    display: true,
    name: {
      en: 'Japanese speaking training',
      ja: '英会話トレーニング'
    },
    category: {
      en: 'Web application',
      ja: 'Webアプリケーション'
    },
    duration: '10 days',
    date: 'January 2019',
    skills: ['React', 'Redux', 'Node.js', 'MongoDB'],
    description: {
      en:
        'Single page application that helps Japanese learners to practice Japanese.',
      ja: ''
    },
    summary: {
      en:
        'This is a web application that helps Japanese English learners to improve their speaking skills. They translate Japanese sentences which are shown on the screen into English and say it. They evaluate their confidence about the sentence by choosing button, and the list of the sentences that they are not comfortable with is shown at the end. The order of the quizzes, the number of the quizzes and the duration can be customized. Moreover, the time they have spent on this application is shown so that they are motivated to practice more. I am going to implement authentication in the future.',
      ja:
        '英会話トレーニング用Webアプリケーション。与えられた日本語の文章を英語に訳し、結果を○×ボタンで評価します。クイズの最後に「x」と評価した文章が表示されます。クイズの出題順序、出題数、制限時間は設定できます。さらに、ユーザーに「もう少しトレーニングしようかな」と思っていただけるよう、合計トレーニング時間を表示させました。今後、ユーザー登録機能の実装を予定しています。'
    },
    image: japaneseTraining,
    gallery: [japaneseTrainingGif],
    demoUrl: 'https://japanese-training.herokuapp.com/',
    githubUrl: 'https://github.com/SayakaOno/japanese-training'
  },
  {
    order: 2,
    display: true,
    name: {
      en: 'Carbon Footprint Calculator',
      ja: ''
    },
    category: {
      en: 'Web application',
      ja: 'Webアプリケーション'
    },
    duration: '2 days+',
    date: 'May 2019',
    skills: ['React', 'API'],
    description: {
      en:
        'Suggests routes between two locations and calculates carbon footprint.',
      ja: ''
    },
    additionalDescription: {
      en:
        'Project at Girls in Tech Vancouver Hacking for Humanity Hackathon 2019. (My role: Frontend)',
      ja: ''
    },
    summary: {
      en:
        'This is a web application that helps Japanese English learners to improve their speaking skills. They translate Japanese sentences which are shown on the screen into English and say it. They evaluate their confidence about the sentence by choosing button, and the list of the sentences that they are not comfortable with is shown at the end. The order of the quizzes, the number of the quizzes and the duration can be customized. Moreover, the time they have spent on this application is shown so that they are motivated to practice more. I am going to implement authentication in the future.',
      ja:
        '英会話トレーニング用Webアプリケーション。与えられた日本語の文章を英語に訳し、結果を○×ボタンで評価します。クイズの最後に「x」と評価した文章が表示されます。クイズの出題順序、出題数、制限時間は設定できます。さらに、ユーザーに「もう少しトレーニングしようかな」と思っていただけるよう、合計トレーニング時間を表示させました。今後、ユーザー登録機能の実装を予定しています。'
    },
    image: footprintCalculator,
    gallery: [footprintCalculatorGif],
    demoUrl: 'https://sayakaono.github.io/footprint-calculator/',
    githubUrl: 'https://github.com/SayakaOno/footprint-calculator'
  },
  {
    order: 4,
    display: true,
    name: {
      en: 'Image search',
      ja: '画像検索アプリ'
    },
    category: {
      en: 'Web application',
      ja: 'Webアプリケーション'
    },
    duration: '2 weeks',
    date: 'January 2019',
    skills: ['React', 'API'],
    history: {
      en:
        "When I go to French or Mexican restaurant that I am not familiar with and look at the menu, I usually can't imagine how each dish looks like. I tend to google them to take a look at its image. However, it takes time to be back and forth the pages and I forget how the first menu looks like(Yes, I am obsessed when it comes to eating!). This app helps me to choose the menu I want to try the best!",
      ja:
        'フレンチやメキシカンレストランなど馴染みがない料理のお店でメニューを見ると、決まってそれがどのような料理か想像できません。そしていつもGoogleで画像検索をしています。しかし、Google検索をするとページを行ったり来たり、「始めのメニューどんなだったっけ？」となることしばし…。このアプリを使えば、もうメニュー選びに妥協は必要ありません！'
    },
    description: {
      en: 'Helps you choose the best menu visually to order at restaurants.',
      ja: ''
    },
    summary: {
      en:
        'This is a web application that lets users to search images by restaurant name and menu name. Every time the user search with new menu name, new tab is added and the images can be seen by changing tabs. Google Custom Search is used for image search.',
      ja:
        '店名とメニュー名で画像検索ができるWebアプリケーション。メニュー名を変えて検索するごとにタブが追加され、タブを切り替えると検索した画像が見られます。画像検索には、Google Custom Searchを使用しています。'
    },
    image: imageSearch,
    gallery: [imageSearchGif1, imageSearchGif2],
    demoUrl: 'https://sayakaono.github.io/image-search',
    githubUrl: 'https://github.com/SayakaOno/image-search'
  },
  {
    order: 3,
    display: true,
    name: {
      en: 'Translator',
      ja: '翻訳アプリ'
    },
    category: {
      en: 'Web application',
      ja: 'Webアプリケーション'
    },
    duration: '2 weeks',
    date: 'July 2018',
    skills: ['PHP', 'API', 'jQuery'],
    history: {
      en:
        'When I was working at Goopter Inc, one of my tasks was to translate English words into 5 languages using Google translate, convert them to UTF-16, format them to JSON and save it in database. It sure is a simple task, but it took a long time to translate even 10 words... That is why, I automated that process.',
      ja:
        'Goopterという会社で働いていた時、英単語を5言語にGoogle翻訳し、UTF-16に変換し、JSONにフォーマットしデータベースに登録するというタスクが与えられました。単純作業でしたが、10単語翻訳するだけでも想像以上に時間を要したので、作業を自動化しました。'
    },
    description: {
      en: 'Translates a word to multiple languages and formats them to JSON.',
      ja: ''
    },
    additionalDescription: {
      en: 'Created to do a task efficiently at the company I was working for.',
      ja: ''
    },
    summary: {
      en:
        "This is a web application that translates the given word into multiple languages and formats to JSON. In order to prevent from mojibake when database is used, the given word is converted to UTF-16. I used the OSS library for talking to Google's Translate API and created my own PHP API.",
      ja:
        '入力されたワードを複数の言語に翻訳し、JSONにフォーマットするアプリケーション。データベース使用の際文字化けしないよう、UTF-16に変換します。Google Translate APIに通信するためのOSSライブラリーを使用し、PHPでAPIを作りました。'
    },
    image: translator,
    gallery: [translatorGif1, translatorGif2],
    demoUrl: 'https://translator-81.herokuapp.com/',
    githubUrl: 'https://github.com/SayakaOno/translator-converter'
  },

  {
    order: 5,
    display: true,
    name: {
      en: 'Inuneko jouto center',
      ja: '犬猫譲渡センター'
    },
    category: {
      en: 'Website',
      ja: 'Webサイト'
    },
    duration: '1.5 months',
    date: 'October 2018',
    skills: ['WordPress', 'PHP'],
    description: {
      en:
        '25 pages long Website for the non-profit organization which intakes dogs and cats whose foster parents are no longer able to provide care for them, and look for someone who will adopt them.',
      ja: ''
    },
    summary: {
      en:
        '"Inuneko jouto center" is the non-profit organization which intakes dogs and cats whose foster parents are no longer able to provide care for them, and look for someone who will adopt them. In addition to blog postiong, I developed the system so that they can easily post the information about dogs and cats which are waiting to be adopted. This is the 25 pages long Website and it is filled with love of the director of the organization for animals.',
      ja:
        '「NP0法人 みなしご救援隊 犬猫譲渡センター」様のWebサイト。ブログに加え、里親募集中の犬・猫情報を簡単に投稿できるようカスタマイズしました。約25ページに渡り、センター長の動物に対する愛情がたっぷり詰まっています。'
    },
    image: inuneko,
    gallery: [],
    demoUrl: 'http://minashigo-joutocenter.com'
  }
];

export const portfolioData = portfolioDetail
  .filter(data => data.display)
  .sort((a, b) => {
    return a.order - b.order;
  });

export const elements = [
  'Website',
  'Web application',
  'React',
  'Redux',
  'MongoDB',
  'WordPress',
  'jQuery',
  'PHP',
  'API'
];
