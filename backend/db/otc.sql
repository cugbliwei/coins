drop table otc_origin;
CREATE TABLE `otc_origin` (
  `trade_type` varchar(20) NOT NULL DEFAULT '',
  `coin_name` varchar(20) NOT NULL DEFAULT '',
  `rank_cnt` int(11) NOT NULL DEFAULT 0,
  `user_name` varchar(200) NOT NULL DEFAULT '',
  `trade_month_times` varchar(30) DEFAULT NULL,
  `order_complete_rate` varchar(10) DEFAULT NULL,
  `trade_count` varchar(50) DEFAULT NULL,
  `min_trade_limit` varchar(50) DEFAULT NULL,
  `max_trade_limit` varchar(50) DEFAULT NULL,
  `pay_type` varchar(50) DEFAULT NULL,
  `pay_name` varchar(50) DEFAULT NULL,
  `landun` int(11) DEFAULT 0,
  `price` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

drop table otc_user;
CREATE TABLE `otc_user` (
  `user_name` varchar(200) NOT NULL DEFAULT '',
  `nick_name` varchar(200) NOT NULL DEFAULT '',
  `password` varchar(200) NOT NULL DEFAULT '',
  `token` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

drop table otc_profile;
CREATE TABLE `otc_profile` (
  `refresh_time` int(11) NOT NULL DEFAULT 8
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;