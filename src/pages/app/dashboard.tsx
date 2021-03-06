import React, { ReactNode } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import Auth from '../component/Auth';
import { Table } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
    sorter: {
      compare: (a: any, b: any) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    sorter: {
      compare: (a: any, b: any) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    sorter: {
      compare: (a: any, b: any) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log('params', pagination, filters, sorter, extra);
}

export default class DashBord extends React.Component<any, any> {
  getOption = () => {
    let option: any = {
      title: {
        text: '???????????????',
        x: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: ['??????', '??????', '??????', '??????', '??????', '??????', '??????'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '?????????',
          type: 'line',
          data: [1000, 2000, 1500, 3000, 2000, 1200, 800],
        },
      ],
    };
    return option;
  };

  getOption2 = () => {
    let option: any = {
      title: {
        text: '???????????????',
      },
      legend: {
        data: ['??????', '??????', '??????'],
      },
      tooltip: {
        //????????????
        trigger: 'axis',
      },
      xAxis: {
        data: ['??????', '??????', '??????', '??????', '??????', '??????', '??????'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '??????',
          type: 'bar',
          data: [2000, 3000, 5500, 7000, 8000, 12000, 20000],
        },
        {
          name: '??????',
          type: 'bar',
          data: [1500, 3000, 4500, 6000, 8000, 10000, 15000],
        },
        {
          name: '??????',
          type: 'bar',
          data: [1000, 2000, 2500, 4000, 6000, 7000, 8000],
        },
      ],
    };
    return option;
  };

  getOption3 = () => {
    let option: any = {
      title: {
        text: '???????????????',
        x: 'center',
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['??????', '??????', '??????', '??????', '??????', '??????', '??????'],
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}({d}%)', //??????????????????tootip
      },
      series: [
        //????????????series??????x,y??????????????????series????????????value???name
        {
          name: '?????????',
          type: 'pie',
          radius: ['50%', '80%'], //?????????????????????
          data: [
            {
              value: 1000,
              name: '??????',
            },
            {
              value: 2000,
              name: '??????',
            },
            {
              value: 1000,
              name: '??????',
            },
            {
              value: 1000,
              name: '??????',
            },
            {
              value: 1000,
              name: '???5???',
            },
            {
              value: 1000,
              name: '??????',
            },
            {
              value: 1000,
              name: '??????',
            },
          ],
        },
      ],
    };
    return option;
  };

  render() {
    return (
      <Auth auth-id={'page-dash-bord'}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div title="??????????????????" style={{ width: '49%' }}>
            <ReactEcharts
              option={this.getOption3()}
              theme="Imooc"
              style={{ height: '400px' }}
            />
          </div>
          <div title="??????????????????" style={{ width: '49%' }}>
            <ReactEcharts
              option={this.getOption2()}
              theme="Imooc"
              style={{ height: '500px' }}
            />
          </div>
          <div style={{ width: '100%' }}>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Auth>
    );
  }
}
