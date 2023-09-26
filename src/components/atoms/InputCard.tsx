import { Card, Alert, Input, Typography, Form } from 'antd';
import { useInputCard } from '@/hooks/useInputCard';

import classes from './InputCard.module.css';

const { Title } = Typography;

interface InputCardProps {
  title: string;
  description: string;
  dynamicStyles: {
    cardStyle?: string;
    titleStyle?: string;
    inputStyle?: string;
    descriptionStyle?: string;
  };
  passwordReqs: (password: string) => boolean;
  activeCardIndex: number;
}

const InputCard: React.FC<InputCardProps> = ({
  title,
  description,
  dynamicStyles,
  passwordReqs,
  activeCardIndex,
}) => {
  const {
    password,
    isValid,
    handlePasswordChange,
    passwordMessage,
    descriptionAlertType,
  } = useInputCard({ passwordReqs, activeCardIndex });

  const mergedStyles = {
    cardStyle: `${classes.card} ${dynamicStyles.cardStyle || ''}`,
    titleStyle: `${classes.title} ${dynamicStyles.titleStyle || ''}`,
    inputStyle: `${classes.input} ${
      isValid === true ? classes.inputValid : ''
    } ${dynamicStyles.inputStyle || ''}`,

    descriptionStyle: `${classes.description} ${
      isValid === true ? classes.isValid : ''
    } ${dynamicStyles.descriptionStyle || ''}`,
  };

  return (
    <Card className={mergedStyles.cardStyle}>
      <Form>
        <Title level={3} className={mergedStyles.titleStyle}>
          {title}
        </Title>
        <Input.Password
          placeholder="input password"
          value={password}
          onChange={handlePasswordChange}
          className={mergedStyles.inputStyle}
        />
        <Alert
          message={description}
          type={descriptionAlertType}
          className={mergedStyles.descriptionStyle}
          showIcon
          description={passwordMessage}
        />
      </Form>
    </Card>
  );
};

export default InputCard;
