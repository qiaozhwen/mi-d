import * as React from 'react';
import router from 'umi/router';
import { NavBar, Icon, List, WhiteSpace } from 'antd-mobile';
import * as styles from './page.less';

export default class extends React.Component {
  renderItem = (data) => {
    return <div>{data.title}</div>;
  };

  render() {
    return (
      <div>
        <div className={styles.banner}>
          <NavBar
            onLeftClick={() => router.goBack()}
            mode="dark"
            icon={<Icon type="left" />}
          >
            我的
          </NavBar>
          <List.Item
            arrow="horizontal"
            thumb={pic}
            multipleLine
            onClick={() => {}}
          >
            <div className={styles.info}>登录/注册</div>
            <div className={styles.subInfo}>登录后享更多特权</div>
          </List.Item>
        </div>
        <WhiteSpace />
        <List>
          <List.Item thumb={icon[0]} arrow="horizontal">
            我的地址
          </List.Item>
        </List>
        <WhiteSpace />
        <List>
          <List.Item thumb={icon[1]} arrow="horizontal">
            金币商城
          </List.Item>
          <List.Item thumb={icon[2]} arrow="horizontal">
            分享拿5元现金
          </List.Item>
        </List>
        <WhiteSpace />
        <List>
          <List.Item thumb={icon[3]} arrow="horizontal">
            我的客服
          </List.Item>
          <List.Item thumb={icon[4]} arrow="horizontal">
            下载饿了么APP
          </List.Item>
        </List>
      </div>
    );
  }
}

const pic = (
  <div
    style={{
      background: '#fff',
      borderRadius: '1rem',
      width: '1rem',
      height: '1rem',
    }}
  >
    <svg viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%">
      <path
        fill="#DCDCDC"
        fillRule="evenodd"
        d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"
      ></path>
    </svg>
  </div>
);

const icon = [
  <svg viewBox="0 0 16 16" id="address" width=".36rem" height="100%">
    <g fill="none" fillRule="evenodd">
      <path fill="#FFF" fillOpacity="0" d="M0 0h16v16H0z"></path>
      <path
        fill="#4AA5F0"
        d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"
      ></path>
    </g>
  </svg>,
  <svg viewBox="0 0 16 16" id="point" width=".36rem" height="100%">
    <g fill="none" fillRule="evenodd">
      <path fill="#FFF" fillOpacity="0" d="M0 0h16v16H0z"></path>
      <path
        fill="#94D94A"
        d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"
      ></path>
    </g>
  </svg>,
  <svg viewBox="0 0 40 40" id="commend" width=".36rem" height="100%">
    <g fill="none" fillRule="evenodd">
      <path
        fill="#FC7B53"
        d="M21 12c-.167-.434-1-1-1-1-.275.437-.767.601-1 1v7H4v-6c0-.843.716-1.562 2-2h6c-1.49.06-2.84-.711-3-2 .06-1.814 1.949-4.528 5-4 2.552.733 4.541 2.943 6 5 1.6-2.094 3.778-4.58 7-5 2.23-.288 4.282 2.198 4 4-.208 1.276-1.582 2.06-3 2h6c1.173.437 1.89 1.156 2 2v6H21v-7zm-7-6c-1.123-.321-1.966.238-3 1 .097.68-.258 1.373 0 2 1.653 1.192 5.452 1.096 8 1-1.202-1.529-2.679-3.07-5-4zm16 3c.726-1.246-1.22-3.714-3-3-2.313 1.075-3.755 2.506-5 4 1.071 0 2.158.023 3 0 1.542-.075 3.965-.16 5-1zM19 36H8c-1.326-.255-2-.907-2-2V20h13v16zm13 0H21V20h13v14c-.47 1.53-1.124 1.745-2 2z"
      ></path>
    </g>
  </svg>,
  <svg viewBox="0 0 54 54" id="service" width=".36rem" height="100%">
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#4DA6F0"
        strokeWidth="3"
        d="M48 28c0 11.598-9.402 21-21 21"
      ></path>
      <path
        fill="#4DA6F0"
        d="M43 40.012v-18h2a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-2zM10 40.012H9a9 9 0 0 1-9-9 9 9 0 0 1 9-9h1v18zM27 46a3 3 0 1 0 0 6 3 3 0 1 0 0-6"
      ></path>
      <path
        fill="#4DA6F0"
        d="M43 24h6c0-12.426-9.574-23-22-23S4 11.574 4 24h6c0-9.098 7.902-17 17-17 9.097 0 16 7.902 16 17z"
      ></path>
    </g>
  </svg>,
  <svg viewBox="0 0 40 40" id="download" width=".4rem" height="100%">
    <path
      fill="rgb(60, 171, 255)"
      d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"
    ></path>
  </svg>,
];
