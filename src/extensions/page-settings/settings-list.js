import { PanelBody,PanelRow, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { HeaderSettings } from "../../block-extensions/header";



export const SwtSettingList = (props) => {
	const disableSections = Object.entries(spectraOne.disable_sections).map(
		([key, value]) => {
			let sectionValue =
				props?.meta[value["key"]] && props.meta[value["key"]]
					? true
					: false;
			return (
				<PanelRow>
					<ToggleControl
						key={key}
						label={value["label"]}
						checked={sectionValue}
						onChange={(val) => {
							props.setMetaFieldValue(val, value["key"]);
						}}
					/>
				</PanelRow>
			);
		}
	);

	const panelBody = (
		<>
			<PanelBody
				title={__("Disable Elements", "spectra-one")}
				initialOpen={true}
				className={"swt-disable-elements-panel"}
			>
				{disableSections}
			</PanelBody>

			{ ( ! props?.meta?.swt_meta_header_display ) && <PanelBody
				title={__("Header Settings", "spectra-one")}
				initialOpen={true}
				className={"swt-header-settings-panel"}
			>
				<HeaderSettings {...props} {...spectraOne.header_settings} />
			</PanelBody>}
		</>
	);

	return panelBody;
};