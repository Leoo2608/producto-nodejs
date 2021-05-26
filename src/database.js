import { Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-54-237-143-127.compute-1.amazonaws.com',
    user:'pdocjrgurlpdjw',
    password:'9bfa8ce6bde2e8fc512f97ed17cabb2b58b26fb21fa1ef0aa2fac21d98bda3e5',
    database:'d1t32e573gc03n',
    port:5432,
    ssl: { rejectUnauthorized: false}
});

