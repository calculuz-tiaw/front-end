--
-- PostgreSQL database dump
--

-- Dumped from database version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)

-- Started on 2021-11-03 11:17:25 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2964 (class 1262 OID 16384)
-- Name: calculuz; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE calculuz WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'pt_BR.UTF-8' LC_CTYPE = 'pt_BR.UTF-8';


ALTER DATABASE calculuz OWNER TO postgres;

\connect calculuz

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16391)
-- Name: calculuz; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calculuz (
    name name NOT NULL,
    password text NOT NULL,
    "userId" text NOT NULL,
    zipcode integer
);


ALTER TABLE public.calculuz OWNER TO postgres;

-- Completed on 2021-11-03 11:17:25 -03

--
-- PostgreSQL database dump complete
--

