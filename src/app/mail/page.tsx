import {Metadata} from 'next';

import MailForm from './MailForm';

export const metadata: Metadata = {
  title: 'Send Mail to Sudip Halder',
  description: 'Sudip Halder is a Software Developer and a Machine Learning expert. Read his blogs on Machine Learning and AI, and learn more about his projects and experiences.',
}

export default function SendMail() {
  return (
    <MailForm />
  );
}
