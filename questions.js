const questions = [
  {
    scenario: "Linux-based Router",
    process: "1. Build OS (production) image (2.4 GB)\n2. Upload image into the SCA tool\n3. Execute scan\n4. Produce SBOM\n5. Generate OSS notices\n6. Verify CVEs and licenses",
    result: "- Tool executed scan without errors\n- Valid SBOM for 4 OSS packages\n- All licenses were permissive\n- Legal notices generated",
    redflags: "- Only 4 packages in a 2.4 GB Linux image\n- Licenses detected all permissive (suspicious)\n- Multi-format scan support unclear",
    question: "Is this correct?",
    answer: "No",
    feedback: "Only 4 OSS packages in a full Linux image is unrealistic. Licensing coverage is likely incomplete."
  },
  {
    scenario: "Java Web Platform (Maven)",
    process: "1. Build software and generate SBOM\n2. Import SBOM into SCA tool\n3. Generate CVE and license reports\n4. If licenses permissive, proceed. Else, ask Legal",
    result: "- Valid SBOM for 78 Maven components\n- No problematic licenses",
    redflags: "- SBOM had no license info; SCA inferred them\n- Inference without artifact verification is risky\n- No validation close to source",
    question: "Is this correct?",
    answer: "No",
    feedback: "Licenses were inferred, which can be incorrect. There was no verification close to the source."
  },
  {
    scenario: "PHP Web Platform using PEAR",
    process: "1. Tarball code into a folder\n2. Send to SCA vendor for scan\n3. Verify CVEs and licenses",
    result: "- 96 PHP PEAR components detected\n- 18 WordPress-related packages\n- All marked as PHP PEAR licensed",
    redflags: "- GPL/AGPL licenses not detected\n- Some packages were commercial\n- PHP code can't be self-attributed",
    question: "Is this correct?",
    answer: "No",
    feedback: "Important licenses were missed, including GPL/AGPL. PHP can't be self-attributed."
  },
  {
    scenario: "SoC Vendor SDK (SBOM Technical)",
    process: "1. Download SDK copy\n2. Import SBOM into SCA tool\n3. Verify CVEs and licenses",
    result: "- Valid SBOM for 118 components\n- No problematic licenses",
    redflags: "- SBOM merged from multiple tools\n- Kernel binaries missing\n- Not all SDK files were included",
    question: "Is this correct?",
    answer: "No",
    feedback: "Merged SBOMs often miss important components. Kernel binaries were not accounted for."
  },
  {
    scenario: "SoC Vendor SDK (Technical Validation)",
    process: "1. Upload SDK tarball into SCA tool\n2. Execute scan\n3. Verify results",
    result: "- Valid scan report for 87 components",
    redflags: "- Binary components not recognized were omitted",
    question: "Is this correct?",
    answer: "No",
    feedback: "Unrecognized binaries were skipped — this results in an incomplete scan report."
  },
  {
    scenario: "iOS Multimedia App",
    process: "1. Build a copy of the iOS app\n2. Upload to SCA tool\n3. Execute scan\n4. Produce report\n5. Verify CVEs and licenses",
    result: "- Valid report for 53 components\n- LGPL-2.1 component dynamically linked\n- Tarball generated for LGPL component",
    redflags: "- Dynamic linking with LGPL not supported on iOS\n- LGPL not fully compatible with App Store\n- Codecs expected, but none reported",
    question: "Is this correct?",
    answer: "No",
    feedback: "LGPL is problematic on iOS and codecs were missing. This app has compliance issues."
  }
];
