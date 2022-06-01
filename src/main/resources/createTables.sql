USE roadSideAssistance;

CREATE TABLE user
(
    uuid          binary(16) NOT NULL,
    email         varchar(255) NOT NULL,
    mobile_number varchar(12)  NOT NULL,
    password      varchar(255) NOT NULL,
    first_name    varchar(255) NOT NULL,
    last_name     varchar(255) NOT NULL,
    date_of_birth DATE         NOT NULL,
    address       varchar(255) NOT NULL,
    suburb        varchar(255) NOT NULL,
    postcode      varchar(4)   NOT NULL,
    state         ENUM('NSW','QLD', 'VIC', 'ACT', 'TAS', 'NT', 'SA', 'WA' ) NOT NULL,
    avg_rating    decimal      NOT NULL,
    CONSTRAINT PK_uuid PRIMARY KEY (uuid),
    CONSTRAINT CK_email UNIQUE (email),
    CONSTRAINT CK_mobile UNIQUE (mobile_number)
);

CREATE TABLE customer
(
    uuid       binary(16) NOT NULL,
    membership ENUM('none', 'basic', 'premium', 'basic priority', 'premium priority') NOT NULL, /*none, basic, premium, basic priority, premium priority*/
    CONSTRAINT PK_uuid PRIMARY KEY (uuid),
    CONSTRAINT FK_uuid_customer FOREIGN KEY (uuid)
        REFERENCES user (uuid)
);

CREATE TABLE technician
(
    uuid             binary(16) NOT NULL,
    available_status boolean NOT NULL,
    technician_latitude    decimal    NOT NULL,
    technician_longitude   decimal    NOT NULL,
    CONSTRAINT PK_uuid PRIMARY KEY (uuid),
    CONSTRAINT FK_uuid_technician FOREIGN KEY (uuid)
        REFERENCES user (uuid)
);

CREATE TABLE technician_qualifications
(
    uuid          binary(16) NOT NULL,
    qualification ENUM('light', 'heavy', 'lightHeavy') NOT NULL,
    CONSTRAINT PK_uuid PRIMARY KEY (uuid),
    CONSTRAINT FK_uuid_technician2 FOREIGN KEY (uuid)
        REFERENCES technician (uuid)
);

CREATE TABLE vehicle
(
    registration_plate varchar(6)   NOT NULL,
    registered_state   ENUM('NSW','QLD', 'VIC', 'ACT', 'TAS', 'NT', 'SA', 'WA' ) NOT NULL,
    uuid               binary(16) NOT NULL,
    manufactured_year  SMALLINT     NOT NULL,
    manufaturer        varchar(255) NOT NULL,
    model              varchar(255) NOT NULL,
    colour             varchar(255) NOT NULL,
    weight             decimal      NOT NULL,
    CONSTRAINT PK_registration PRIMARY KEY (registration_plate, registered_state, uuid),
    CONSTRAINT FK_uuid_owner FOREIGN KEY (uuid)
        REFERENCES user (uuid)
);

CREATE TABLE job
(
    /*job_uuid             binary(16) NOT NULL,  I think a job ID should be generated as PK - Makes it easier for support to find specific jobs without needing to search with the start time*/
    customer_uuid        binary(16) NOT NULL,
    start_time           DATETIME   NOT NULL,
    technician_uuid      binary(16) NOT NULL,
    customer_reg_plate   varchar(6) NOT NULL,
    customer_reg_state   ENUM('NSW','QLD', 'VIC', 'ACT', 'TAS', 'NT', 'SA', 'WA' ) NOT NULL,
    technician_reg_plate varchar(6) NOT NULL,
    technician_reg_state ENUM('NSW','QLD', 'VIC', 'ACT', 'TAS', 'NT', 'SA', 'WA' ) NOT NULL,
    finish_time          DATETIME   NOT NULL,
    status               enum('waiting_for_tech', 'tech_dispatched', 'repair_in_progress', 'completed') NOT NULL,
    repair_category      enum('tyre', 'mechanical', 'windshield', 'other') NOT NULL,
    customer_latitude    decimal    NOT NULL,
    customer_longitude   decimal    NOT NULL,
    job_price            decimal    NOT NULL DEFAULT '0', /*Defaulted to 0 in case cost should be calculated post-repair to factor in time taken*/
    CONSTRAINT PK_job_id PRIMARY KEY (customer_uuid, start_time), /*job_uuid instead?*/
    CONSTRAINT FK_customer_uuid FOREIGN KEY (customer_uuid)
        REFERENCES customer (uuid),
    CONSTRAINT FK_technician_uuid FOREIGN KEY (technician_uuid)
        REFERENCES technician (uuid),
    CONSTRAINT FK_customer_rego FOREIGN KEY (customer_reg_plate, customer_reg_state)
        REFERENCES vehicle (registration_plate, registered_state),
    CONSTRAINT FK_tech_rego FOREIGN KEY (technician_reg_plate, technician_reg_state)
        REFERENCES vehicle (registration_plate, registered_state)
);

CREATE TABLE credit_card
(
    uuid        binary(16) NOT NULL,
    card_name   varchar(255) NOT NULL,
    card_number varchar(19)  NOT NULL,
    expiry_date DATE         NOT NULL,
    cvc         varchar(4)   NOT NULL,
    CONSTRAINT PK_card_uuid PRIMARY KEY (uuid),
    CONSTRAINT FK_card_uuid FOREIGN KEY (uuid)
        REFERENCES customer (uuid)
);

CREATE TABLE bank_account
(
    uuid           binary(16) NOT NULL,
    account_name   varchar(255) NOT NULL,
    bsb            varchar(6)   NOT NULL,
    account_number varchar(10)  NOT NULL,
    CONSTRAINT PK_bank_uuid PRIMARY KEY (uuid),
    CONSTRAINT FK_bank_uuid FOREIGN KEY (uuid)
        REFERENCES technician (uuid)
);

CREATE TABLE admin
(
    uuid binary(16) NOT NULL,
    CONSTRAINT PK_uuid_admin PRIMARY KEY (uuid),
    CONSTRAINT FK_uuid_admin FOREIGN KEY (uuid)
        REFERENCES user (uuid)
);

CREATE TABLE customer_ex
(
    uuid  binary(16) NOT NULL,
    name  varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    dob   DATE         NOT NULL,
    CONSTRAINT PK_uuid PRIMARY KEY (uuid)
);

