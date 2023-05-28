# Getting Started with the back-end

## Prerequisites

### WSL

WSL stands for Windows Subsystem Linux and allows you to install a linux distribution in Windows. It provides performant and seamless integration between windows and linux, without the need for virtualisation. Web development and a lot of its tools work better on a linux based system.
More info: <https://www.digitalocean.com/community/posts/trying-the-new-wsl-2-its-fast-windows-subsystem-for-linux>

If you're running on Windows, you can choose to install WSL2 (with ubuntu distro).
More information on how to install WSL: <https://docs.microsoft.com/en-us/windows/wsl/install>.

On mac or native linux, you can skip this step.

### VSCode

Throughout the lessons we'll use VSCode for the exercises. Make sure you have the following extensions downloaded and enabled:

-   Prettier - Code formatter
-   Auto Rename Tag
-   GitLens - Git supercharged

Open the settings of VSCode, search for **Format on save** and make sure it's checked. This assures that every time you save a file, it's being formatted according to the code style rules described in **.prettier.rc**.

Replace the values with your local configuration.

## Starting the application

Run the following commands in a terminal (**cd in the `backend` folder!!**), to get the application up and running.

First, install all required node dependencies using npm (node package manager):

```console
> npm install
```

Then, to start the backend server execute:

```console
> npm start
```

## Testing

Open your browser and navigate to <http://localhost:3000/status>.

A message saying "Back-end is running..." should appear.

If this is the case, you have succesfully completed the installation process.

## Troubleshooting

### **Network problems in WSL**

If you're having problems in WSL when executing command that require a network connection, like **curl** or **ping**, try the following:

Edit the file **/etc/wsl.conf** and add the lines:

```properties
[network]
generateResolvConf = false
```

Remove symlink **/etc/resolv.conf**

```console
> sudo rm -rf /etc/resolv.conf\*\*
```

Create a new file **/etc/resolv.conf** and add the line:

```properties
nameserver 8.8.8.8
```

Lock the resolv.conf so it doesn't get overwritten by executing:

```console
> sudo chattr +i resolv.conf
```

Restart WSL.

### **Setting WSL as default integrated terminal in VSCode**

In VSCode press **ctr/cmd-shift-p** and type **"Open Settings (JSON)"**.

In the Object **terminal.integrated.profiles.windows** add this entry:

```properties
"Ubuntu (WSL)": {
"path": "C:\\WINDOWS\\System32\\wsl.exe",
"args": ["-d", "Ubuntu"]
}
```

Find the setting **terminal.integrated.defaultProfile.windows** and change it to:

```properties
"terminal.integrated.defaultProfile.windows": "Ubuntu (WSL)"
```

seeding (had mooier gekunt maar ik had geen tijd meer)

````
--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 15.1

-- Started on 2023-05-28 23:39:25 CEST

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
-- TOC entry 3616 (class 1262 OID 75323)
-- Name: web4; Type: DATABASE; Schema: -; Owner: postgres
--


ALTER DATABASE web4 OWNER TO postgres;


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
-- TOC entry 3609 (class 0 OID 92018)
-- Dependencies: 216
-- Data for Name: Article; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Article" (article_id, title, content, date_published) VALUES (1, 'How does the coronavirus spread?', 'As of now, researchers know that the coronavirus is spread through droplets and virus particles released into the air when an infected person breathes, talks, laughs, sings, coughs or sneezes. Larger droplets may fall to the ground in a few seconds, but tiny infectious particles can linger in the air and accumulate in indoor places, especially where many people are gathered and there is poor ventilation. This is why mask-wearing, hand hygiene and physical distancing are essential to preventing COVID-19.', '2014-12-30 00:00:00');
INSERT INTO public."Article" (article_id, title, content, date_published) VALUES (2, 'Like, love, or ‘in love’?', 'Psychological research over the past 50 years has investigated the differences between liking someone, loving someone and being “in love”.

Liking is described as having positive thoughts and feelings towards someone and finding that person’s company rewarding. We often also experience warmth and closeness towards the people we like. In some instances we choose to be emotionally intimate with these people.When we love someone we experience the same positive thoughts and experiences as when we like a person. But we also experience a deep sense of care and commitment towards that person.

Being “in love” includes all the above but also involves feelings of sexual arousal and attraction. However, research into people’s own views of love suggests that not all love is the same.', '2014-12-30 00:00:00');


--
-- TOC entry 3607 (class 0 OID 92009)
-- Dependencies: 214
-- Data for Name: Employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Employee" (employee_id, name, password, email, role) VALUES (1, 'string', 'string', 'string', 'worker');
INSERT INTO public."Employee" (employee_id, name, password, email, role) VALUES (2, 'string', 'string', 'string2', 'worker');
INSERT INTO public."Employee" (employee_id, name, password, email, role) VALUES (3, 'string', 'string', 'string3', 'worker');
INSERT INTO public."Employee" (employee_id, name, password, email, role) VALUES (4, 'string', 'string', 'string4', 'worker');
INSERT INTO public."Employee" (employee_id, name, password, email, role) VALUES (6, 'Greg', '$2b$10$sjF2cTCz5rQueYFrlsS0/.9qRVWpLUe4Nn7742.fj9rryvW3cQ1Wm', 'gregwenshell@gmail.com', 'admin');
INSERT INTO public."Employee" (employee_id, name, password, email, role) VALUES (7, 'string', '$2b$10$c7NKq9DjDlShymCiNJ6RDuooNZx8RfIyq6m7flVBREItihSsSD1UK', 'string1@gmail.com', 'worker');
INSERT INTO public."Employee" (employee_id, name, password, email, role) VALUES (8, 'string', '$2b$10$UYRrNmQFcWVtAdOgjayvOeaW0tWkoGxHcxziD5SjYqGbVmfsY9CgO', 'string21', 'worker');
INSERT INTO public."Employee" (employee_id, name, password, email, role) VALUES (5, 'Greg', '$2b$10$c9GiHQJLojKqHKZ6G0M/xOK8I7HDb4a7jkllP7a2HHSM2Dz./2zSu', 'Greg', 'admin');
INSERT INTO public."Employee" (employee_id, name, password, email, role) VALUES (9, 'patryck', '$2b$10$O3vySNvNLi7ypcyEH4KXiuUOUd5IcG/1Hla9JgJKH0l.luQCFYGLi', 'patryck@gmail.com', 'worker');


--
-- TOC entry 3603 (class 0 OID 91991)
-- Dependencies: 210
-- Data for Name: Relation_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (1, 'love', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (2, 'ADZADZ', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (3, 'Ik ', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (4, 'Wenshell', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (5, 'fall', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (6, 'fall', true);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (7, 'Ik ', true);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (8, 'Greg', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (9, 'Greg2', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (10, 'Hallo', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (11, 'd', true);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (12, 'd', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (13, 'is', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (14, 'released', false);
INSERT INTO public."Relation_type" (type_id, type_name, is_unique) VALUES (15, 'experience', false);


--
-- TOC entry 3605 (class 0 OID 92000)
-- Dependencies: 212
-- Data for Name: Relation; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Relation" (relation_id, sentence, subject_entity, object_entity, relation_type_id, article_id) VALUES (11, 'This is why mask-wearing, hand hygiene and physical distancing are essential to preventing COVID-19.', 'This', 'why mask-wearing, hand hygiene', 13, 1);
INSERT INTO public."Relation" (relation_id, sentence, subject_entity, object_entity, relation_type_id, article_id) VALUES (12, 'As of now, researchers know that the coronavirus is spread through droplets and virus particles released into the air when an infected person breathes, talks, laughs, sings, coughs or sneezes.', 'virus particles', '/', 14, 1);
INSERT INTO public."Relation" (relation_id, sentence, subject_entity, object_entity, relation_type_id, article_id) VALUES (10, 'Liking is described as having positive thoughts and feelings towards someone and finding that person’s company rewarding', 'Liking', 'described as having positive thoughts', 13, 2);
INSERT INTO public."Relation" (relation_id, sentence, subject_entity, object_entity, relation_type_id, article_id) VALUES (13, 'We often also experience warmth and closeness towards the people we like', 'We', 'warmth and closeness towards the people we like', 15, 2);


--
-- TOC entry 3610 (class 0 OID 92054)
-- Dependencies: 217
-- Data for Name: _ArticleToEmployee; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3617 (class 0 OID 0)
-- Dependencies: 215
-- Name: Article_article_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Article_article_id_seq"', 2, true);


--
-- TOC entry 3618 (class 0 OID 0)
-- Dependencies: 213
-- Name: Employee_employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Employee_employee_id_seq"', 9, true);


--
-- TOC entry 3619 (class 0 OID 0)
-- Dependencies: 211
-- Name: Relation_relation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Relation_relation_id_seq"', 13, true);


--
-- TOC entry 3620 (class 0 OID 0)
-- Dependencies: 209
-- Name: Relation_type_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Relation_type_type_id_seq"', 15, true);


-- Completed on 2023-05-28 23:39:25 CEST

--
-- PostgreSQL database dump complete
--

```
````
