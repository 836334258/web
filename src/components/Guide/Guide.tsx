import { Layout, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './Guide.less';
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(SupabaseUrl, SupabaseKey);

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name } = props;

  const [countries, setCountries] = useState([]);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }


  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          欢迎使用 <strong>{name}</strong> ！
        </Typography.Title>
        <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
      </Row>
    </Layout>
  );
};

export default Guide;
