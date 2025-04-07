const questions = [
  {
    scenario: "A supplier provided a CycloneDX SBOM with 120 components and license fields for only 50 of them.",
    process: "The team ran the SBOM through ossbomer-schema for format validation and then used ossbomer-conformance to check compliance.",
    result: "The schema passed, but the conformance check flagged the missing license fields.",
    redflags: "Only 50 of 120 components had license info. CRA and NTIA require license declarations.",
    question: "Is this SBOM valid for OSS compliance?",
    answer: "No",
    feedback: "OSS compliance requires every component to have licensing information. Missing data makes the SBOM incomplete."
  },
  {
    scenario: "An SPDX JSON SBOM includes all required fields and also contains SHA-1 and SHA-256 hashes for each component.",
    process: "The SBOM was analyzed with ossbomer-conformance and ossbomer-oslc.",
    result: "All checks passed successfully.",
    redflags: "None",
    question: "Does this SBOM meet compliance expectations?",
    answer: "Yes",
    feedback: "Providing full SPDX fields and secure hashes ensures conformance and traceability."
  },
  {
    scenario: "A developer manually curated an SBOM in SPDX format but used custom field names like 'pkg_license' and 'code_origin'.",
    process: "The SBOM was passed through schema validation.",
    result: "The validation failed due to unrecognized fields.",
    redflags: "Custom fields not defined in the SPDX spec.",
    question: "Is this a valid SPDX SBOM?",
    answer: "No",
    feedback: "SPDX schema requires standard field names. Custom fields break schema and tooling compatibility."
  },
  {
    scenario: "An SBOM in CycloneDX format lists PURLs for each component but no version numbers.",
    process: "ossbomer-conformance was run to verify completeness.",
    result: "The report highlighted missing version fields.",
    redflags: "PURLs without version numbers reduce component traceability.",
    question: "Is this SBOM acceptable for accurate dependency tracking?",
    answer: "No",
    feedback: "Version info is crucial to track exact components. Missing versions can obscure vulnerabilities."
  },
  {
    scenario: "A security team receives an SBOM for audit with 100% license coverage but all licenses marked as 'OTHER'.",
    process: "ossbomer-oslc compared licenses against known SPDX identifiers.",
    result: "The audit flagged all licenses as non-standard.",
    redflags: "'OTHER' used as a placeholder instead of SPDX IDs.",
    question: "Is this a compliant license declaration?",
    answer: "No",
    feedback: "Valid SPDX licenses must be used to ensure automated tooling and audits are accurate."
  }
];