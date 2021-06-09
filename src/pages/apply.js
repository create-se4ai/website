import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import PageHeader from "../components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default () => {
  useEffect(() => { 
    const script = document.createElement("script");
    script.src =
      "https://s3.amazonaws.com/files.freshteam.com/production/78710/attachments/5000279106/original/5000017287_widget.js?1622426024";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <Layout title="Open Positions" description="Apply Now">
      <main>
        <div id="freshteam-widget">
          <div
            style={{
              padding: "3rem 0 0 1rem",
              textAlign: "center",
            }}
          >
            <FontAwesomeIcon size={"4x"} spin icon={faSpinner} />
          </div>
        </div>
      </main>
    </Layout>
  );
};
