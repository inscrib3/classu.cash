import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { NavSection, RenderFunctions } from "@/src/types/nut";

interface NutTabsProps {
	sections: NavSection[];
	activeSection: string;
	onSectionChange: (sectionId: string) => void;
	renderFunctions: RenderFunctions;
	className?: string;
}

export const NutTabs: React.FC<NutTabsProps> = ({
	sections,
	activeSection,
	onSectionChange,
	renderFunctions,
	className = "",
}) => {
	return (
		<Tabs value={activeSection} onValueChange={onSectionChange} className={className}>
			<TabsList className="grid w-full gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-transparent border border-gray-300 dark:border-gray-700 p-2 h-auto">
				{sections.map((section) => (
					<TabsTrigger
						key={section.id}
						value={section.id}
						className="
                            flex items-center gap-2 
                            /* Stili per i tab NON selezionati */
                            bg-gray-100 dark:bg-gray-800 
                            text-gray-600 dark:text-gray-400 
                            border border-transparent 
                            hover:bg-gray-200 dark:hover:bg-gray-700 
                            hover:text-gray-900 dark:hover:text-gray-100
                            
                            /* Stili per il tab ATTIVO */
                            data-[state=active]:bg-gradient-to-r 
                            data-[state=active]:from-purple-500 
                            data-[state=active]:to-blue-500 
                            data-[state=active]:text-white
                            data-[state=active]:border-transparent
                        "
					>
						<span>{section.icon}</span>
						<span className="inline text-sm font-medium">{section.label}</span>
					</TabsTrigger>
				))}
			</TabsList>

			<div className="mt-6">
				{sections.map((section) => (
					<TabsContent key={section.id} value={section.id} className="animate-in fade-in-50">
						{renderFunctions[section.id]?.()}
					</TabsContent>
				))}
			</div>
		</Tabs>
	);
};
