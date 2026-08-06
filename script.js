


    // Reusable live preview function

    function bindPreview(inputId, previewId) {

        const input =
            document.getElementById(inputId);

        const preview =
            document.getElementById(previewId);


        input.addEventListener("input", function () {

            preview.textContent = this.value;

        });

    }


    // Personal Details

    bindPreview("name", "p_name");

    bindPreview("role", "p_role");

    bindPreview("mail", "p_mail");

    bindPreview("phone", "p_phone");

    bindPreview("address", "p_address");


    // Summary

    bindPreview("about", "p_about");


    // Experience

    bindPreview("company", "p_company");

    bindPreview("exp_role", "p_exp_role");

    bindPreview("start_date", "p_start_date");

    bindPreview("end_date", "p_end_date");

    bindPreview("description", "p_desc");


    // Education

    bindPreview("institute", "p_institute");

    bindPreview("department", "p_department");

    bindPreview("passout", "p_passout");


    // Percentage

    document
        .getElementById("percentage")
        .addEventListener("input", function () {

            if (this.value) {

                document.getElementById("p_percentage")
                    .textContent =
                    "Percentage: " + this.value + "%";

            } else {

                document.getElementById("p_percentage")
                    .textContent = "";

            }

        });


    // Skills

    bindPreview("skill", "p_skill");


    // Contact separators

    function updateContact() {

        const email =
            document.getElementById("mail").value;

        const phone =
            document.getElementById("phone").value;

        const address =
            document.getElementById("address").value;


        document.getElementById("mail_separator")
            .textContent =
            email && (phone || address) ? " | " : "";


        document.getElementById("phone_separator")
            .textContent =
            phone && address ? " | " : "";

    }


    document.getElementById("mail")
        .addEventListener("input", updateContact);

    document.getElementById("phone")
        .addEventListener("input", updateContact);

    document.getElementById("address")
        .addEventListener("input", updateContact);


    // Experience date separator

    function updateDateSeparator() {

        const start =
            document.getElementById("start_date").value;

        const end =
            document.getElementById("end_date").value;


        document.getElementById("date_separator")
            .textContent =
            start && end ? " - " : "";

    }


    document.getElementById("start_date")
        .addEventListener("input", updateDateSeparator);

    document.getElementById("end_date")
        .addEventListener("input", updateDateSeparator);


