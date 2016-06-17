CREATE USER csdemo IDENTIFIED BY csdemo;
GRANT DBA TO csdemo;
grant alter session to csdemo;
grant create session to csdemo;
grant flashback any table to csdemo;
grant select any dictionary to csdemo;
grant select any table to csdemo;
grant select any transaction to csdemo;
grant unlimited tablespace to csdemo;
ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;

CREATE USER notcsdemo IDENTIFIED BY notcsdemo;
GRANT DBA TO notcsdemo;