import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./DepartmentBar.css";

const DepartmentBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Set<string>>(new Set());

  const toggleSubMenu = (key: string) => {
    setOpenSubMenus((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const isOpenMenu = (key: string) => openSubMenus.has(key);

  return (
    <>
      <button
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰ Menu
      </button>

      <aside className={`departmentbar ${isOpen ? "open" : ""}`}>
        <div className="back-button">
          <Link to="/">← {t("back")}</Link>
        </div>

        <ul>
          {/* Accounts */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("accounts")}>
              {t("departments.accounts.title")}
              <span>{isOpenMenu("accounts") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("accounts") && (
              <ul className="submenu">
                <li><Link to="/departments/accounts/bills-format">{t("departments.accounts.billsFormat")}</Link></li>
                <li><Link to="/departments/accounts/codes-manuals">{t("departments.accounts.codesManuals")}</Link></li>
                <li><Link to="/departments/accounts/eft-mandate">{t("departments.accounts.eftMandate")}</Link></li>
                <li><Link to="/departments/accounts/declaration">{t("departments.accounts.declarationNonApplicability")}</Link></li>
                <li><Link to="/departments/accounts/amendment-turnover">{t("departments.accounts.amendmentTurnover")}</Link></li>
                <li><Link to="/departments/accounts/asset-register">{t("departments.accounts.assetRegister")}</Link></li>
                <li><Link to="/departments/accounts/selection-notice">{t("departments.accounts.selectionNotice")}</Link></li>
              </ul>
            )}
          </li>

          {/* Civil Engineering */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("civilEng")}>
              {t("departments.civilEng.title")}
              <span>{isOpenMenu("civilEng") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("civilEng") && (
              <ul className="submenu">
                <li><Link to="/departments/civil-engineering/manual-scavenging">{t("departments.civilEng.eliminationManualScavenging")}</Link></li>
              </ul>
            )}
          </li>

          {/* Electrical Engineering */}
          <li>
            <Link to="/departments/electrical-engineering">{t("departments.electricalEng")}</Link>
          </li>

          {/* Mechanical Engineering */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("mechEng")}>
              {t("departments.mechEng.title")}
              <span>{isOpenMenu("mechEng") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("mechEng") && (
              <ul className="submenu">
                <li><Link to="/departments/mechanical/manufacturing-process">{t("departments.mechEng.manufacturingProcess")}</Link></li>
                <li><Link to="/departments/mechanical/org-structure">{t("departments.mechEng.orgStructure")}</Link></li>
                <li><Link to="/departments/mechanical/non-moving-items">{t("departments.mechEng.nonMovingItems")}</Link></li>
              </ul>
            )}
          </li>

          {/* Marketing */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("marketing")}>
              {t("departments.marketing.title")}
              <span>{isOpenMenu("marketing") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("marketing") && (
              <ul className="submenu">
                <li><Link to="/departments/marketing/division">{t("departments.marketing.marketingDivision")}</Link></li>
              </ul>
            )}
          </li>

          {/* Medical */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("medical")}>
              {t("departments.medical.title")}
              <span>{isOpenMenu("medical") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("medical") && (
              <ul className="submenu">
                <li><Link to="/departments/medical/registration-firm">{t("departments.medical.registrationFirm")}</Link></li>
              </ul>
            )}
          </li>

          {/* Personnel */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("personnel")}>
              {t("departments.personnel.title")}
              <span>{isOpenMenu("personnel") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("personnel") && (
              <ul className="submenu">
                <li><Link to="/departments/personnel/railway-services">{t("departments.personnel.railwayServices")}</Link></li>
                <li><Link to="/departments/personnel/gazetted-transfer">{t("departments.personnel.gazettedTransferOrders")}</Link></li>
                <li><Link to="/departments/personnel/cadre-position">{t("departments.personnel.cadrePosition")}</Link></li>
                <li><Link to="/departments/personnel/recruitment">{t("departments.personnel.recruitmentSection")}</Link></li>
                <li><Link to="/departments/personnel/staff-welfare">{t("departments.personnel.staffWelfare")}</Link></li>
                <li><Link to="/departments/personnel/important-letter">{t("departments.personnel.importantLetterNotice")}</Link></li>
                <li><Link to="/departments/personnel/selection-notice">{t("departments.personnel.selectionNotice")}</Link></li>
                <li><Link to="/departments/personnel/important-form">{t("departments.personnel.importantFormEmployee")}</Link></li>
                <li><Link to="/departments/personnel/gazetted-section">{t("departments.personnel.gazettedSection")}</Link></li>
                <li><Link to="/departments/personnel/seniority-list">{t("departments.personnel.seniorityList")}</Link></li>
                <li><Link to="/departments/personnel/public-grievances">{t("departments.personnel.publicGrievances")}</Link></li>

                {/* Establishment Circular - level 3 */}
                <li>
                  <div className="submenu-toggle" onClick={() => toggleSubMenu("establishmentCircular")}>
                    {t("departments.personnel.establishmentCircular.title")}
                    <span>{isOpenMenu("establishmentCircular") ? "▲" : "▼"}</span>
                  </div>
                  {isOpenMenu("establishmentCircular") && (
                    <ul className="submenu">
                      <li><Link to="/departments/personnel/establishment/all">{t("departments.personnel.establishmentCircular.allCirculars")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/pass-rule">{t("departments.personnel.establishmentCircular.passRule")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/recruitment">{t("departments.personnel.establishmentCircular.recruitment")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/promotion">{t("departments.personnel.establishmentCircular.promotion")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/misc">{t("departments.personnel.establishmentCircular.miscellaneous")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/allowances">{t("departments.personnel.establishmentCircular.allowances")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/advances">{t("departments.personnel.establishmentCircular.advances")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/settlement">{t("departments.personnel.establishmentCircular.settlement")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/leave-rule">{t("departments.personnel.establishmentCircular.leaveRule")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/welfare">{t("departments.personnel.establishmentCircular.welfare")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/reservation">{t("departments.personnel.establishmentCircular.reservation")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/conduct-rules">{t("departments.personnel.establishmentCircular.conductRules")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/irem">{t("departments.personnel.establishmentCircular.irem")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/medical-rule">{t("departments.personnel.establishmentCircular.medicalRule")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/master-circular">{t("departments.personnel.establishmentCircular.masterCircular")}</Link></li>
                      <li><Link to="/departments/personnel/establishment/irec">{t("departments.personnel.establishmentCircular.irec")}</Link></li>
                    </ul>
                  )}
                </li>

                <li><Link to="/departments/personnel/jpo-cmp">{t("departments.personnel.jpoCMP")}</Link></li>

                {/* Recruitment Roster - level 3 */}
                <li>
                  <div className="submenu-toggle" onClick={() => toggleSubMenu("recruitmentRoster")}>
                    {t("departments.personnel.recruitmentRoster.title")}
                    <span>{isOpenMenu("recruitmentRoster") ? "▲" : "▼"}</span>
                  </div>
                  {isOpenMenu("recruitmentRoster") && (
                    <ul className="submenu">
                      <li><Link to="/departments/personnel/roster/accounts">{t("departments.personnel.recruitmentRoster.accountsDept")}</Link></li>
                      <li><Link to="/departments/personnel/roster/personnel">{t("departments.personnel.recruitmentRoster.personnelDept")}</Link></li>
                      <li><Link to="/departments/personnel/roster/civil">{t("departments.personnel.recruitmentRoster.civilEng")}</Link></li>
                      <li><Link to="/departments/personnel/roster/electrical">{t("departments.personnel.recruitmentRoster.electricalEng")}</Link></li>
                      <li><Link to="/departments/personnel/roster/mechanical">{t("departments.personnel.recruitmentRoster.mechEng")}</Link></li>
                      <li><Link to="/departments/personnel/roster/stores">{t("departments.personnel.recruitmentRoster.storesDept")}</Link></li>
                      <li><Link to="/departments/personnel/roster/admin">{t("departments.personnel.recruitmentRoster.generalAdmin")}</Link></li>
                      <li><Link to="/departments/personnel/roster/medical">{t("departments.personnel.recruitmentRoster.medicalDept")}</Link></li>
                    </ul>
                  )}
                </li>

                <li><Link to="/departments/personnel/settlement">{t("departments.personnel.settlementSec")}</Link></li>
                <li><Link to="/departments/personnel/revised-rules">{t("departments.personnel.revisedRules")}</Link></li>
                <li><Link to="/departments/personnel/sexual-harassment">{t("departments.personnel.sexualHarassment")}</Link></li>
                <li><Link to="/departments/personnel/staff-council">{t("departments.personnel.staffCouncil")}</Link></li>
              </ul>
            )}
          </li>

          {/* Rajbhasha */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("rajbhasha")}>
              {t("departments.rajbhasha.title")}
              <span>{isOpenMenu("rajbhasha") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("rajbhasha") && (
              <ul className="submenu">
                <li><Link to="#">{t("departments.rajbhasha.barekaDarpan31")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.barekaDarpan32")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.barekaDarpan33")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.barekaDarpan34")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.barekaDarpan35")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.barekaDarpan36")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.listOfBooks")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.gmMessage2023")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.questionBank")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.narakas")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.gmMessage2024")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.rajbhashaPakhwada")}</Link></li>
                <li><Link to="#">{t("departments.rajbhasha.gmMessage2025")}</Link></li>
              </ul>
            )}
          </li>

          {/* Stores */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("stores")}>
              {t("departments.stores.title")}
              <span>{isOpenMenu("stores") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("stores") && (
              <ul className="submenu">
                <li><Link to="#">{t("departments.stores.suspendedFirms")}</Link></li>
                <li><Link to="#">{t("departments.stores.tenderDocuments")}</Link></li>
                <li><Link to="#">{t("departments.stores.postContractMatter")}</Link></li>
                <li><Link to="#">{t("departments.stores.plUnification")}</Link></li>
                <li><Link to="#">{t("departments.stores.checklistBills")}</Link></li>
                <li><Link to="#">{t("departments.stores.inactiveSurplus")}</Link></li>
                <li><Link to="#">{t("departments.stores.nonMovingHighValue")}</Link></li>
                <li><Link to="#">{t("departments.stores.gstChange")}</Link></li>
                <li><Link to="#">{t("departments.stores.estimatedTender")}</Link></li>
                <li><Link to="#">{t("departments.stores.excessHighValue")}</Link></li>
                <li><Link to="#">{t("departments.stores.rejectionPolicy")}</Link></li>
                <li><Link to="#">{t("departments.stores.videoAssembly")}</Link></li>
                <li><Link to="#">{t("departments.stores.tentativeRequirement")}</Link></li>
                <li><Link to="#">{t("departments.stores.irsConditions")}</Link></li>
              </ul>
            )}
          </li>

          {/* Technical Training Centre */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("techTraining")}>
              {t("departments.techTraining.title")}
              <span>{isOpenMenu("techTraining") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("techTraining") && (
              <ul className="submenu">
                <li><Link to="#">{t("departments.techTraining.ttcBrochure")}</Link></li>
                <li><Link to="#">{t("departments.techTraining.weldorNomination")}</Link></li>
                <li><Link to="#">{t("departments.techTraining.questionBank")}</Link></li>
                <li><Link to="#">{t("departments.techTraining.trainingCalender")}</Link></li>
                <li><Link to="#">{t("departments.techTraining.internshipTraining")}</Link></li>
              </ul>
            )}
          </li>

          {/* Vigilance */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("vigilance")}>
              {t("departments.vigilance.title")}
              <span>{isOpenMenu("vigilance") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("vigilance") && (
              <ul className="submenu">
                <li><Link to="#">{t("departments.vigilance.awarenessWeek")}</Link></li>
                <li><Link to="#">{t("departments.vigilance.organization")}</Link></li>
                <li><Link to="#">{t("departments.vigilance.systemImprovements")}</Link></li>
                <li><Link to="#">{t("departments.vigilance.bulletin")}</Link></li>
                <li><Link to="#">{t("departments.vigilance.complaintPolicy")}</Link></li>
                <li><Link to="#">{t("departments.vigilance.selections")}</Link></li>
                <li><Link to="#">{t("departments.vigilance.rtiInfo")}</Link></li>
              </ul>
            )}
          </li>

          {/* Design Department */}
          <li>
            <div className="submenu-toggle" onClick={() => toggleSubMenu("design")}>
              {t("departments.design.title")}
              <span>{isOpenMenu("design") ? "▲" : "▼"}</span>
            </div>
            {isOpenMenu("design") && (
              <ul className="submenu">
                <li><Link to="#">{t("departments.design.videoMounting")}</Link></li>
                <li><Link to="#">{t("departments.design.eoiConversion")}</Link></li>
                <li><Link to="#">{t("departments.design.eoiUpgradation")}</Link></li>
              </ul>
            )}
          </li>

          {/* Safety */}
          <li>
            <Link to="/departments/safety">{t("departments.safety")}</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default DepartmentBar;