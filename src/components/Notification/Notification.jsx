import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

function Notification({ message }) {
  return <div>{message && <Title>{message}</Title>}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
