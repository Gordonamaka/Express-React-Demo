DROP TABLE IF EXISTS weekly_stock_data CASCADE;
CREATE TABLE weekly_stock_data (
  id SERIAL PRIMARY KEY NOT NULL,
  ticker VARCHAR(255) NOT NULL,
  interval VARCHAR(255) NOT NULL,
  time VARCHAR(255) NOT NULL,
  open VARCHAR(255) NOT NULL,
  high VARCHAR(255) NOT NULL,
  low VARCHAR(255) NOT NULL,
  close VARCHAR(255) NOT NULL,
  adjusted_close VARCHAR(255) NOT NULL,
  volume VARCHAR(255) NOT NULL,
  dividend_amount VARCHAR(255) NOT NULL
);