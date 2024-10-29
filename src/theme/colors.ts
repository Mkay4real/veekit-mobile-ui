import {
    amber,
    amberA,
    amberDark,
    amberDarkA,
    blue,
    blueA,
    blueDark,
    blueDarkA,
    bronze,
    bronzeA,
    bronzeDark,
    bronzeDarkA,
    brown,
    brownA,
    brownDark,
    brownDarkA,
    crimson,
    crimsonA,
    crimsonDark,
    crimsonDarkA,
    cyan,
    cyanA,
    cyanDark,
    cyanDarkA,
    gold,
    goldA,
    goldDark,
    goldDarkA,
    gray,
    grayA,
    grayDark,
    grayDarkA,
    green,
    greenA,
    greenDark,
    greenDarkA,
    indigo,
    indigoA,
    indigoDark,
    indigoDarkA,
    iris,
    irisA,
    irisDark,
    irisDarkA,
    jade,
    jadeA,
    jadeDark,
    jadeDarkA,
    lime,
    limeA,
    limeDark,
    limeDarkA,
    mauve,
    mauveA,
    mauveDark,
    mauveDarkA,
    mint,
    mintA,
    mintDark,
    mintDarkA,
    olive,
    oliveA,
    oliveDark,
    oliveDarkA,
    orange,
    orangeA,
    orangeDark,
    orangeDarkA,
    pink,
    pinkA,
    pinkDark,
    pinkDarkA,
    plum,
    plumA,
    plumDark,
    plumDarkA,
    purple,
    purpleA,
    purpleDark,
    purpleDarkA,
    red,
    redA,
    redDark,
    redDarkA,
    ruby,
    rubyA,
    rubyDark,
    rubyDarkA,
    sage,
    sageA,
    sageDark,
    sageDarkA,
    sand,
    sandA,
    sandDark,
    sandDarkA,
    sky,
    skyA,
    skyDark,
    skyDarkA,
    slate,
    slateA,
    slateDark,
    slateDarkA,
    teal,
    tealA,
    tealDark,
    tealDarkA,
    tomato,
    tomatoA,
    tomatoDark,
    tomatoDarkA,
    violet,
    violetA,
    violetDark,
    violetDarkA,
    yellow,
    yellowA,
    yellowDark,
    yellowDarkA,
  } from '@radix-ui/colors'
  
  type ColorSet = { [key: string]: string }
  
  type VeeColor = {
    light: ColorSet
    dark: ColorSet
    alphaLight: ColorSet
    alphaDark: ColorSet
  }
  
  type Vee = {
    blue: VeeColor
    gray: VeeColor
  }
  
  const vee: Vee = {
    blue: {
      light: {
        veeblue1: '#FBFDFF',
        veeblue2: '#F4F9FF',
        veeblue3: '#E8F3FE',
        veeblue4: '#DAEDFF',
        veeblue5: '#C9E3FE',
        veeblue6: '#B5D6F8',
        veeblue7: '#9BC5F0',
        veeblue8: '#74AEE7',
        veeblue9: '#117ACA',
        veeblue10: '#006CBB',
        veeblue11: '#0274C4',
        veeblue12: '#0E385B',
      },
      dark: {
        veeblue1: '#07121D',
        veeblue2: '#0C1A27',
        veeblue3: '#022848',
        veeblue4: '#003365',
        veeblue5: '#004078',
        veeblue6: '#004E8A',
        veeblue7: '#025FA2',
        veeblue8: '#0073C2',
        veeblue9: '#117ACA',
        veeblue10: '#006CBB',
        veeblue11: '#65BBFF',
        veeblue12: '#C6E5FF',
      },
      alphaLight: {
        veeblueA1: 'rgba(0,128,255,0.0157)',
        veeblueA2: 'rgba(0,116,255,0.0431)',
        veeblueA3: 'rgba(0,122,244,0.0902)',
        veeblueA4: 'rgba(0,131,255,0.1451)',
        veeblueA5: 'rgba(0,123,251,0.2118)',
        veeblueA6: 'rgba(1,114,231,0.2902)',
        veeblueA7: 'rgba(0,108,217,0.3922)',
        veeblueA8: 'rgba(0,107,211,0.5451)',
        veeblueA9: 'rgba(0,113,198,0.9322)',
        veeblueA10: '#006CBB',
        veeblueA11: 'rgba(0,115,196,0.9922)',
        veeblueA12: 'rgba(0,44,82,0.9451)',
      },
      alphaDark: {
        veeblueA1: 'rgba(0,37,253,0.051)',
        veeblueA2: 'rgba(0,113,251,0.0941)',
        veeblueA3: 'rgba(0,117,255,0.2314)',
        veeblueA4: 'rgba(0,114,255,0.3529)',
        veeblueA5: 'rgba(0,125,253,0.4353)',
        veeblueA6: 'rgba(0,137,255,0.5098)',
        veeblueA7: 'rgba(0,144,254,0.6118)',
        veeblueA8: 'rgba(0,149,255,0.7451)',
        veeblueA9: 'rgba(17,151,254,0.7804)',
        veeblueA10: 'rgba(0,144,254,0.7176)',
        veeblueA11: '#65BBFF',
        veeblueA12: '#C6E5FF',
      },
    },
    gray: {
      light: {
        veegray1: '#FBFCFE',
        veegray2: '#F6FAFD',
        veegray3: '#EBF1F6',
        veegray4: '#E1EAF0',
        veegray5: '#D8E3EB',
        veegray6: '#CFDCE5',
        veegray7: '#C1D1DD',
        veegray8: '#A9BFD0',
        veegray9: '#7B91A1',
        veegray10: '#708696',
        veegray11: '#546774',
        veegray12: '#14212A',
        veegray13: "#60646C"
      },
      dark: {
        veegray1: '#000000',
        veegray2: '#07141D',
        veegray3: '#0D212E',
        veegray4: '#152A38',
        veegray5: '#1D3241',
        veegray6: '#263C4A',
        veegray7: '#344A59',
        veegray8: '#4D6474',
        veegray9: '#5A7182',
        veegray10: '#677F8F',
        veegray11: '#9FB7C9',
        veegray12: '#E4F0F9',
      },
      alphaLight: {
        veegray1: 'rgba(0,64,192,0.0157)',
        veegray2: 'rgba(0,114,199,0.0353)',
        veegray3: 'rgba(0,77,141,0.0784)',
        veegray4: 'rgba(0,77,128,0.1174)',
        veegray5: 'rgba(0,72,125,0.1529)',
        veegray6: 'rgba(0,70,117,0.1882)',
        veegray7: 'rgba(0,66,116,0.2434)',
        veegray8: 'rgba(0,66,116,0.3373)',
        veegray9: 'rgba(0,43,74,0.5176)',
        veegray10: 'rgba(0,40,68,0.5608)',
        veegray11: 'rgba(0,29,48,0.6706)',
        veegray12: 'rgba(0,14,24,0.9216)',
      },
      alphaDark: {
        veegray1: 'rgba(0,0,0,0)',
        veegray2: 'rgba(62,176,255,0.11)',
        veegray3: 'rgba(73,183,255,0.18)',
        veegray4: 'rgba(96,192,255,0.22)',
        veegray5: 'rgba(114,197,255,0.26)',
        veegray6: 'rgba(131,207,255,0.29)',
        veegray7: 'rgba(149,213,255,0.35)',
        veegray8: 'rgba(170,220,255,0.45)',
        veegray9: 'rgba(177,222,255,0.51)',
        veegray10: 'rgba(184,227,255,0.56)',
        veegray11: 'rgba(202,232,255,0.79)',
        veegray12: 'rgba(234,246,255,0.98)',
      },
    },
  }
  
  const createColorScheme = (
    colorSource: ColorSet,
    prefix: string = '',
    sourcePrefix: string,
  ): ColorSet => {
    const colorScheme: ColorSet = {}
    for (let i = 1; i <= 12; i++) {
      colorScheme[`${prefix}${i}`] = colorSource[`${sourcePrefix}${i}`]
    }
    return colorScheme
  }
  
  const {
    light: veeBlueLight,
    dark: veeBlueDark,
    alphaLight: veeBlueAlphaLight,
    alphaDark: veeBlueAlphaDark,
  } = vee.blue
  
  const accent = {
    light: createColorScheme(veeBlueLight, 'accent', 'veeblue'),
    dark: createColorScheme(veeBlueDark, 'accent', 'veeblue'),
    alphaLight: createColorScheme(veeBlueAlphaLight, 'accentA', 'veeblueA'),
    alphaDark: createColorScheme(veeBlueAlphaDark, 'accentA', 'veeblueA'),
  }
  
  const neutral = {
    light: createColorScheme(slate, 'neutral', 'slate'),
    dark: createColorScheme(slateDark, 'neutral', 'slate'),
    alphaLight: createColorScheme(slateA, 'neutralA', 'slateA'),
    alphaDark: createColorScheme(slateDarkA, 'neutralA', 'slateA'),
  }
  
  const error = {
    light: createColorScheme(red, 'error', 'red'),
    dark: createColorScheme(redDark, 'error', 'red'),
    alphaLight: createColorScheme(redA, 'errorA', 'redA'),
    alphaDark: createColorScheme(redDarkA, 'errorA', 'redA'),
  }
  
  const success = {
    light: createColorScheme(green, 'success', 'green'),
    dark: createColorScheme(greenDark, 'success', 'green'),
    alphaLight: createColorScheme(greenA, 'successA', 'greenA'),
    alphaDark: createColorScheme(greenDarkA, 'successA', 'greenA'),
  }
  
  const warning = {
    light: createColorScheme(amber, 'warning', 'amber'),
    dark: createColorScheme(amberDark, 'warning', 'amber'),
    alphaLight: createColorScheme(amberA, 'warningA', 'amberA'),
    alphaDark: createColorScheme(amberDarkA, 'warningA', 'amberA'),
  }
  
  const info = {
    light: createColorScheme(sky, 'info', 'sky'),
    dark: createColorScheme(skyDark, 'info', 'sky'),
    alphaLight: createColorScheme(skyA, 'infoA', 'skyA'),
    alphaDark: createColorScheme(skyDarkA, 'infoA', 'skyA'),
  }
  
  const semantics = {
    error,
    success,
    warning,
    info,
  }
  
  const createColorState = (primary: string, hover: string, pressed: string) => ({
    DEFAULT: primary,
    hover,
    pressed,
  })
  
  const createColorStateText = ({
    primary,
    muted,
    placeholder,
    disabled,
    inverse,
    bold,
    isGray = false,
  }: {
    primary: string
    muted?: string
    placeholder?: string
    disabled?: string
    inverse: string
    bold?: string
    isGray?: boolean
  }): { inverse: string; DEFAULT: string } => ({
    DEFAULT: primary,
    inverse,
    ...(isGray ? { muted, placeholder, disabled } : { bold }),
  })
  
  const createTextColorScheme = ({
    color,
    alpha,
    string,
    grayDef,
  }: {
    color: ColorSet
    alpha: ColorSet
    string: string
    grayDef?: string
  }): { inverse: string; DEFAULT: string } =>
    createColorStateText({
      primary: grayDef || alpha[`${string}A11`],
      muted: color[`${string}11`],
      placeholder: alpha[`${string}A9`],
      disabled: alpha[`${string}A8`],
      inverse: color[`${string}1`],
      bold: color[`${string}12`],
      isGray: !!grayDef,
    })
  
  const typeColors = {
    light: {
      gray: createTextColorScheme({
        color: neutral.light,
        alpha: neutral.alphaLight,
        string: 'neutral',
        grayDef: '#131518',
      }),
      accent: createTextColorScheme({
        color: accent.light,
        alpha: accent.alphaLight,
        string: 'accent',
      }),
      success: createTextColorScheme({
        color: success.light,
        alpha: success.alphaLight,
        string: 'success',
      }),
      error: createTextColorScheme({
        color: error.light,
        alpha: error.alphaLight,
        string: 'error',
      }),
      warning: createTextColorScheme({
        color: warning.light,
        alpha: warning.alphaLight,
        string: 'warning',
      }),
      info: createTextColorScheme({
        color: info.light,
        alpha: info.alphaLight,
        string: 'info',
      }),
      tomato: createTextColorScheme({
        color: tomato,
        alpha: tomatoA,
        string: 'tomato',
      }),
      violet: createTextColorScheme({
        color: violet,
        alpha: violetA,
        string: 'violet',
      }),
      cyan: createTextColorScheme({
        color: cyan,
        alpha: cyanA,
        string: 'cyan',
      }),
    },
    dark: {
      gray: createTextColorScheme({
        color: neutral.dark,
        alpha: neutral.alphaDark,
        string: 'neutral',
        grayDef: '#FFF',
      }),
      accent: createTextColorScheme({
        color: accent.dark,
        alpha: accent.alphaDark,
        string: 'accent',
      }),
      success: createTextColorScheme({
        color: success.dark,
        alpha: success.alphaDark,
        string: 'success',
      }),
      error: createTextColorScheme({
        color: error.dark,
        alpha: error.alphaDark,
        string: 'error',
      }),
      warning: createTextColorScheme({
        color: warning.dark,
        alpha: warning.alphaDark,
        string: 'warning',
      }),
      info: createTextColorScheme({
        color: info.dark,
        alpha: info.alphaDark,
        string: 'info',
      }),
      tomato: createTextColorScheme({
        color: tomatoDark,
        alpha: tomatoDarkA,
        string: 'tomato',
      }),
      violet: createTextColorScheme({
        color: violetDark,
        alpha: violetDarkA,
        string: 'violet',
      }),
      cyan: createTextColorScheme({
        color: cyanDark,
        alpha: cyanDarkA,
        string: 'cyan',
      }),
    },
  }
  
  type ColorStateBorder = {
    DEFAULT: string
    light?: string
    lighter?: string
    strong: string
    subtle?: string
    hover?: string
    active?: string
  }
  
  const createColorStateBorder = ({
    primary,
    light,
    lighter,
    strong,
    subtle,
    hover,
    active,
    isGray = false,
  }: {
    primary: string
    light?: string
    lighter?: string
    strong: string
    subtle?: string
    hover?: string
    active?: string
    isGray?: boolean
  }): ColorStateBorder => ({
    DEFAULT: primary,
    strong,
    ...(isGray ? { subtle, hover, active } : { light, lighter }),
  })
  
  const createBorderColorScheme = ({
    alpha,
    string,
    isGray = false,
  }: {
    alpha: ColorSet
    string: string
    isGray?: boolean
  }): ColorStateBorder =>
    createColorStateBorder({
      primary: isGray ? alpha[`${string}A6`] : alpha[`${string}A8`],
      light: alpha[`${string}A7`],
      lighter: alpha[`${string}A6`],
      strong: alpha[`${string}A11`],
      subtle: alpha[`${string}A5`],
      hover: alpha[`${string}A8`],
      active: alpha[`${string}A9`],
      isGray,
    })
  
  type BgColorScheme = {
    transparent: { DEFAULT: string; hover: string; pressed: string }
    base: { DEFAULT: string; hover: string; pressed: string }
    light: { DEFAULT: string; hover: string; pressed: string }
    lighter: { DEFAULT: string; hover: string; pressed: string }
    bold: { DEFAULT: string; hover: string; pressed: string }
  }
  
  const createBgColorScheme = (
    colorVariant: ColorSet,
    alphaColorVariant: ColorSet,
    string: string,
  ): BgColorScheme => ({
    transparent: createColorState(
      'rgba(252,252,253,0)',
      alphaColorVariant[`${string}A3`],
      alphaColorVariant[`${string}A4`],
    ),
    base: createColorState(
      colorVariant[`${string}9`],
      colorVariant[`${string}10`],
      colorVariant[`${string}10`],
    ),
    light: createColorState(
      alphaColorVariant[`${string}A3`],
      alphaColorVariant[`${string}A4`],
      alphaColorVariant[`${string}A5`],
    ),
    lighter: createColorState(
      alphaColorVariant[`${string}A2`],
      alphaColorVariant[`${string}A3`],
      alphaColorVariant[`${string}A4`],
    ),
    bold: createColorState(
      colorVariant[`${string}12`],
      colorVariant[`${string}12`],
      colorVariant[`${string}12`],
    ),
  })
  
  const borderColors = {
    light: {
      disable: neutral.alphaLight.neutralA6,
      gray: createBorderColorScheme({
        alpha: neutral.alphaLight,
        string: 'neutral',
        isGray: true,
      }),
      accent: createBorderColorScheme({
        alpha: accent.alphaLight,
        string: 'accent',
      }),
      success: createBorderColorScheme({
        alpha: success.alphaLight,
        string: 'success',
      }),
      error: createBorderColorScheme({
        alpha: error.alphaLight,
        string: 'error',
      }),
      warning: createBorderColorScheme({
        alpha: warning.alphaLight,
        string: 'warning',
      }),
      info: createBorderColorScheme({
        alpha: info.alphaLight,
        string: 'info',
      }),
    },
    dark: {
      disable: neutral.alphaDark.neutralA6,
      gray: createBorderColorScheme({
        alpha: neutral.alphaDark,
        string: 'neutral',
        isGray: true,
      }),
      accent: createBorderColorScheme({
        alpha: accent.alphaDark,
        string: 'accent',
      }),
      success: createBorderColorScheme({
        alpha: success.alphaDark,
        string: 'success',
      }),
      error: createBorderColorScheme({
        alpha: error.alphaDark,
        string: 'error',
      }),
      warning: createBorderColorScheme({
        alpha: warning.alphaDark,
        string: 'warning',
      }),
      info: createBorderColorScheme({
        alpha: info.alphaDark,
        string: 'info',
      }),
    },
  }
  
  const bgColors = {
    light: {
      disable1: neutral.alphaLight.neutralA3,
      disable2: neutral.alphaLight.neutralA2,
      accent: createBgColorScheme(accent.light, accent.alphaLight, 'accent'),
      neutral: createBgColorScheme(neutral.light, neutral.alphaLight, 'neutral'),
      success: createBgColorScheme(success.light, success.alphaLight, 'success'),
      error: createBgColorScheme(error.light, error.alphaLight, 'error'),
      warning: createBgColorScheme(warning.light, warning.alphaLight, 'warning'),
      info: createBgColorScheme(info.light, info.alphaLight, 'info'),
    },
    dark: {
      disable1: neutral.alphaDark.neutralA3,
      disable2: neutral.alphaDark.neutralA2,
      accent: createBgColorScheme(accent.dark, accent.alphaDark, 'accent'),
      neutral: createBgColorScheme(neutral.dark, neutral.alphaDark, 'neutral'),
      success: createBgColorScheme(success.dark, success.alphaDark, 'success'),
      error: createBgColorScheme(error.dark, error.alphaDark, 'error'),
      warning: createBgColorScheme(warning.dark, warning.alphaDark, 'warning'),
      info: createBgColorScheme(info.dark, info.alphaDark, 'info'),
    },
  }
  
  const variables = {
    light: {
      'white-to-dark': '#FFFFFF',
      'white-to-dark2': '#FFFFFF',
      'dark-to-white': '#131518',
      backdrop: neutral.alphaLight.neutralA8,
      translucent: 'rgba(255,255,255,0.8)',
      solid: 'rgba(255,255,255,1)',
    },
    dark: {
      'white-to-dark': neutral.dark.neutral1,
      'white-to-dark2': 'rgba(0,0,0,0.25)',
      'dark-to-white': '#FFFFFF',
      backdrop: 'rgba(0,0,0,0.75)',
      translucent: 'rgba(29,29,33,0.7)',
      solid: neutral.dark.neutral2,
    },
    alphaLight: {
      overlay: {
        black1: 'rgba(0,0,0,0.012)',
        black2: 'rgba(0,0,0,0.024)',
        black3: 'rgba(0,0,0,0.055)',
        black4: 'rgba(0,0,0,0.078)',
        black5: 'rgba(0,0,0,0.106)',
        black6: 'rgba(0,0,0,0.133)',
        black7: 'rgba(0,0,0,0.169)',
        black8: 'rgba(0,0,0,0.267)',
        black9: 'rgba(0,0,0,0.447)',
        black10: 'rgba(0,0,0,0.498)',
        black11: 'rgba(0,0,0,0.608)',
        black12: 'rgba(0,0,0,0.875)',
        white1: 'rgba(255,255,255,0)',
        white2: 'rgba(255,255,255,0.013)',
        white3: 'rgba(255,255,255,0.069)',
        white4: 'rgba(255,255,255,0.104)',
        white5: 'rgba(255,255,255,0.134)',
        white6: 'rgba(255,255,255,0.169)',
        white7: 'rgba(255,255,255,0.216)',
        white8: 'rgba(255,255,255,0.312)',
        white9: 'rgba(255,255,255,0.372)',
        white10: 'rgba(255,255,255,0.455)',
        white11: 'rgba(255,255,255,0.662)',
        white12: 'rgba(255,255,255,0.926)',
      },
    },
    alphaDark: {
      overlay: {
        black1: 'rgba(0,0,0,0.012)',
        black2: 'rgba(0,0,0,0.024)',
        black3: 'rgba(0,0,0,0.055)',
        black4: 'rgba(0,0,0,0.078)',
        black5: 'rgba(0,0,0,0.106)',
        black6: 'rgba(0,0,0,0.133)',
        black7: 'rgba(0,0,0,0.169)',
        black8: 'rgba(0,0,0,0.267)',
        black9: 'rgba(0,0,0,0.447)',
        black10: 'rgba(0,0,0,0.498)',
        black11: 'rgba(0,0,0,0.608)',
        black12: 'rgba(0,0,0,0.875)',
        white1: 'rgba(255,255,255,0)',
        white2: 'rgba(255,255,255,0.013)',
        white3: 'rgba(255,255,255,0.069)',
        white4: 'rgba(255,255,255,0.104)',
        white5: 'rgba(255,255,255,0.134)',
        white6: 'rgba(255,255,255,0.169)',
        white7: 'rgba(255,255,255,0.216)',
        white8: 'rgba(255,255,255,0.312)',
        white9: 'rgba(255,255,255,0.372)',
        white10: 'rgba(255,255,255,0.455)',
        white11: 'rgba(255,255,255,0.662)',
        white12: 'rgba(255,255,255,0.926)',
      },
    },
  }
  
  const themeColors = {
    light: {
      'page-bg': variables.light['white-to-dark'],
      'page-bg2': neutral.light.neutral3,
      surface: variables.light['white-to-dark2'],
      'surface-gray': neutral.alphaLight.neutralA3,
      'surface-accent': accent.alphaLight.accent2,
      overlay: variables.light.backdrop,
      'contrast-accent': '#FFFFFF',
      'contrast-white': '#FFFFFF',
      'contrast-black': '#131518',
    },
    dark: {
      'page-bg': variables.dark['white-to-dark'],
      'page-bg2': neutral.dark.neutral3,
      surface: variables.dark['white-to-dark2'],
      'surface-gray': neutral.alphaDark.neutralA3,
      'surface-accent': accent.alphaDark.accent2,
      overlay: variables.dark.backdrop,
      'contrast-accent': '#FFFFFF',
      'contrast-white': '#FFFFFF',
      'contrast-black': '#131518',
    },
  }
  
  const light = {
    ...tomato,
    ...red,
    ...crimson,
    ...pink,
    ...plum,
    ...purple,
    ...violet,
    ...indigo,
    ...blue,
    ...cyan,
    ...teal,
    ...green,
    ...orange,
    ...brown,
    ...sky,
    ...mint,
    ...lime,
    ...yellow,
    ...amber,
    ...gray,
    ...mauve,
    ...slate,
    ...sage,
    ...olive,
    ...sand,
    ...bronze,
    ...gold,
    ...ruby,
    ...iris,
    ...jade,
    ...vee.blue.light,
    ...vee.gray.light,
    ...accent.light,
    ...neutral.light,
    ...semantics.error.light,
    ...semantics.success.light,
    ...semantics.warning.light,
    ...semantics.info.light,
    background: { ...bgColors.light },
    type: { ...typeColors.light },
    edge: { ...borderColors.light },
    ...variables.light,
    ...themeColors.light,
  }
  
  const dark = {
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...orangeDark,
    ...brownDark,
    ...skyDark,
    ...mintDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...bronzeDark,
    ...goldDark,
    ...rubyDark,
    ...irisDark,
    ...jadeDark,
    ...vee.blue.dark,
    ...vee.gray.dark,
    ...accent.dark,
    ...neutral.dark,
    ...semantics.error.dark,
    ...semantics.success.dark,
    ...semantics.warning.dark,
    ...semantics.info.dark,
    background: { ...bgColors.dark },
    type: { ...typeColors.dark },
    edge: { ...borderColors.dark },
    ...variables.dark,
    ...themeColors.dark,
  }
  
  const alphaLight = {
    ...tomatoA,
    ...redA,
    ...crimsonA,
    ...pinkA,
    ...plumA,
    ...purpleA,
    ...violetA,
    ...indigoA,
    ...blueA,
    ...cyanA,
    ...tealA,
    ...greenA,
    ...orangeA,
    ...brownA,
    ...skyA,
    ...mintA,
    ...limeA,
    ...yellowA,
    ...amberA,
    ...grayA,
    ...mauveA,
    ...slateA,
    ...sageA,
    ...oliveA,
    ...sandA,
    ...bronzeA,
    ...goldA,
    ...rubyA,
    ...irisA,
    ...jadeA,
    ...vee.blue.alphaLight,
    ...vee.gray.alphaLight,
    ...accent.alphaLight,
    ...neutral.alphaLight,
    ...semantics.error.alphaLight,
    ...semantics.success.alphaLight,
    ...semantics.warning.alphaLight,
    ...semantics.info.alphaLight,
    ...variables.alphaLight,
  }
  
  const alphaDark = {
    ...tomatoDarkA,
    ...redDarkA,
    ...crimsonDarkA,
    ...pinkDarkA,
    ...plumDarkA,
    ...purpleDarkA,
    ...violetDarkA,
    ...indigoDarkA,
    ...blueDarkA,
    ...cyanDarkA,
    ...tealDarkA,
    ...greenDarkA,
    ...orangeDarkA,
    ...brownDarkA,
    ...skyDarkA,
    ...mintDarkA,
    ...limeDarkA,
    ...yellowDarkA,
    ...amberDarkA,
    ...grayDarkA,
    ...mauveDarkA,
    ...slateDarkA,
    ...sageDarkA,
    ...oliveDarkA,
    ...sandDarkA,
    ...bronzeDarkA,
    ...goldDarkA,
    ...rubyDarkA,
    ...irisDarkA,
    ...jadeDarkA,
    ...vee.blue.alphaDark,
    ...vee.gray.alphaDark,
    ...accent.alphaDark,
    ...neutral.alphaDark,
    ...semantics.error.alphaDark,
    ...semantics.success.alphaDark,
    ...semantics.warning.alphaDark,
    ...semantics.info.alphaDark,
    ...variables.alphaDark,
  }
  
  const darkColors = {
    ...dark,
    ...alphaDark,
  }
  
  const lightColors = {
    ...light,
    ...alphaLight,
  }
  
  const colors = {
    light: { ...lightColors },
    dark: { ...darkColors },
  }
  
  export default colors