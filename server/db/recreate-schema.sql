-- Drop tables in case they already exist
DROP TABLE if exists users;
DROP TABLE if exists questions;

-- Create tables
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email    VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL
);

insert into users (email,password) values('reyam@gmail.com','123455');
insert into users (email,password) values('ahmed@gmail.com','73635');
insert into users (email,password) values('zan@gmail.com','2516722');





CREATE TABLE questions(
  id           SERIAL PRIMARY KEY,
  ques_text    VARCHAR (150) NOT NULL,
  ques_date    DATE NOT NULL,
  tags         VARCHAR(50),
  isAnswered   BOOLEAN NOT NULL,
  score        INT,
  userid      INT REFERENCES users(id)
);


insert into questions (ques_text,ques_date,tags,isAnswered,score,userid ) values('I have been served court papers in regards to parental','2013-12-10','paper',true,4,1);
insert into questions (ques_text,ques_date,tags,isAnswered,score,userid) values('IMy wife and I are arriving in the UK in october and will','2015-02-21','wife',true,4,2);
insert into questions (ques_text,ques_date,tags,isAnswered,score,userid ) values('I have asked a question here before about visa for an','2014-07-27','visa',true,4,1);
insert into questions (ques_text,ques_date,tags,isAnswered,score,userid ) values('It not might be immigration question. let me explain','2018-04-12','immigrantion',true,4,2);
insert into questions (ques_text,ques_date,tags,isAnswered,score,userid) values('With a zambian passport, my father is British with a British','2019-06-08','zambian',true,4,2);
insert into questions (ques_text,ques_date,tags,isAnswered,score,userid) values('هل صحيح انه ينعم بالحرية والامن والامان','2019-04-21','حرية',false,4,1);