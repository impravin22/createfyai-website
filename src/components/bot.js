import React from 'react';
import '../css/bot.css';
import ChatBot from 'react-simple-chatbot';

function Bot() {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#333',
    headerFontColor: '#59fbf0',
    headerFontSize: '15px',
    botBubbleColor: '#59fbf0',
    botFontColor: '#59fbf0',
    userBubbleColor: '#59fbf0',
    userFontColor: '#4a4a4a',
  };

  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'I\'m daish, Happy to talk! What is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you!',
          trigger: '4',
        },
        {
          id: '4',
          message: 'I\'m here to help you. What specific information are you looking for?',
          trigger: '5',
        },
        {
          id: '5',
          options: [
            { value: 1, label: 'Abroad Exams', trigger: '6' },
            { value: 2, label: 'Visa Process', trigger: '7' },
            { value: 3, label: 'College Selection', trigger: '8' },
            { value: 4, label: 'Others', trigger: '9' },
          ],
        },
        {
          id: '6',
          message: 'Which exams are you preparing for?',
          trigger: '10',
        },
        {
          id: '7',
          message: 'Do you have any specific questions about the visa process?',
          trigger: '11',
        },
        {
          id: '8',
          message: 'What are your criteria for selecting a college?',
          trigger: '12',
        },
        {
          id: '9',
          message: 'What other information do you need assistance with?',
          trigger: '13',
        },
        {
          id: '10',
          user: true,
          trigger: '14',
        },
        {
          id: '11',
          user: true,
          trigger: '14',
        },
        {
          id: '12',
          user: true,
          trigger: '14',
        },
        {
          id: '13',
          user: true,
          trigger: '14',
        },
        {
          id: '14',
          message: 'Thank you for your answer. Our team will get back to you shortly with the information you need. Do you have any other queries?',
          trigger: '15',
        },
        {
          id: '15',
          user: true,
          trigger: '16',
        },
        {
          id: '16',
          message: "Oops!..my teams are willing to talk with you sooner",
          end: true,
        },
      ]}
      floating={true}
      style={theme} 
    />
  );
}

export default Bot;
