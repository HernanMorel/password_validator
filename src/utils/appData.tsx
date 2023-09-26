import classes from './appData.module.css';

export const data = [
  {
    title: 'Qventus Login',
    description: 'Has a number 0-9',
    passwordReqs: (password: string) => /\d/.test(password),
    dynamicStyles: {
      cardStyle: classes.firstCardStyle,
      titleStyle: classes.firstTitleStyle,
      inputStyle: classes.firstInputStyle,
      descriptionStyle: classes.firstDescriptionStyle,
    },
  },
  {
    title: 'Cerner Login',
    description: 'Has a special character !@#$%^&*',
    passwordReqs: (password: string) => /[!@#$%^&*]/.test(password),
    dynamicStyles: {
      cardStyle: classes.secondCardStyle,
      titleStyle: classes.secondTitleStyle,
      inputStyle: classes.secondInputStyle,
      descriptionStyle: classes.secondDescriptionStyle,
    },
  },
  {
    title: 'Allscripts Login',
    description: 'Has uppercase letter',
    passwordReqs: (password: string) => /[A-Z]/.test(password),
    dynamicStyles: {
      cardStyle: classes.thirdCardStyle,
      titleStyle: classes.thirdTitleStyle,
      inputStyle: classes.thirdInputStyle,
      descriptionStyle: classes.thirdDescriptionStyle,
    },
  },
  {
    title: 'Epic Login',
    description: 'Has NO consecutive letters',
    passwordReqs: (password: string) => /([a-zA-Z])\1/.test(password),
    dynamicStyles: {
      cardStyle: classes.fourthCardStyle,
      titleStyle: classes.fourthTitleStyle,
      inputStyle: classes.fourthInputStyle,
      descriptionStyle: classes.fourthDescriptionStyle,
    },
  },
];
