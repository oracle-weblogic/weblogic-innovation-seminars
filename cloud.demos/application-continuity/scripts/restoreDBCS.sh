#!/bin/sh

echo exit | sqlplus -S / as sysdba @/tmp/deleteSetup.sql
