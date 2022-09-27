/**
 * Hiển thị các card trong giao diện chính
 * @remark Module react-card không hỗ trợ với Typescript, nên phải code bằng js
 * @see pasteimage/2022-09-27-15-31-29.png
 */
import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';   /** Bổ sung Layout ms-Grid bằng cách cài gói npm install office-ui-fabric-react, hoặc bổ sung css trực tiếp vào html */
import { Card } from '@uifabric/react-cards';
import {Text, initializeIcons, Stylesheet} from '@fluentui/react';  /** hương dẫn https://developer.microsoft.com/en-us/fluentui#/styles/web/icons */

/**
 * Style của container chứa tất cả các card
 */
const container = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10vh 0',
};

/**
 * Kích thước của icon biểu tượng ở tiêu đề
 */
 const icon = {
  fontSize: 24,
  padding: 15,
  verticalAlign: 'middle',
  paddingLeft: 0,
  color: '#0078d4'
}

/**
 * Quản lý tập trung các styles của tất bộ phận trong card
 */
const styles = {
  /** Style tổng thể toàn bộ card*/
  cardStyles: {
    root: {
      background: 'white',
      padding: 20,
      borderTop: '5px solid #0078d4',
      width: '90%',
      maxWidth: '90%',
      margin: 'auto',
    }
  },
  /** Style cho phần chữ tiêu đề card*/
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  /**
 * Kích thước của icon biểu tượng ở tiêu đề
 */
  icon: {
    fontSize: 24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4'
  },
  /** Style cho phần số tiền  */
  amount: { 
    root: {
      fontSize: 26,
      paddingBottom: 20,
      paddingTop: 30,
    }
  },
  /** Style cho phần tỷ lệ % giảm giá */
  percentage: {
    root: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#0078d4',
    }
  }
};

/**
 * Danh sách/payload của các card thông tin
 */
const cards = [
  {
    title: 'Current Balance',
    amount: '$21 837',
    icon: 'Money',                  // trả cứu icon ở đây: https://developer.microsoft.com/en-us/fluentui#/styles/web/icons
    percentage: '2.3',
  },
  {
    title: 'Current Expanses',
    amount: '$10 927',
    icon: 'PaymentCard',
    percentage: '0.3'
  },
  {
    title: 'Current Income',
    amount: '$15 093',
    icon: 'Savings',
    percentage: '1.3'
  }
]

export function CardsSection() {
  initializeIcons();  // Luôn phải khởi tạo thư viện icon trước khi dùng. Xem https://developer.microsoft.com/en-us/fluentui#/styles/web/icons
  return (
    <div style={container}>
      {cards.map((card) => (
        <div className="s-Grid-col ms-sm3 ms-xl3">
          <Card styles={styles.cardStyles}>
            <Card.Section>
              <Card.Item>
                <i style={styles.icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>                
                <Text styles={styles.header}>{card.title}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.amount}>{card.amount}</Text>
              </Card.Item>
              <Card.Item>
                <Text styles={styles.percentage}>
                  {card.percentage} %
                </Text>
              </Card.Item>
            </Card.Section>
          </Card>
        </div>
      ))}
    </div>
  );
};

