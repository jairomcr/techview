import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingPlans } from "./Pricing.data";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
    return (
        <section className="py-24 bg-gradient-to-b from-purple-700/10 to-purple-900" 
          id="pricing"            
        >
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        Choose your plan
                    </h2>
                    <p className="text-xl text-stale-200 max-w-2xl mx-auto">
                        Start free, upgrade when you are ready to ace every interview
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {
                        pricingPlans.map((plan,index)=>(
                            <Card key={index}
                                className={`relative group hover:shadow-xl transition-all duration-300 border-0 px-2 py-6 ${plan.popular ? " rounded-md border bg-purple-900/70 border-purple-400/30 text-purple-200" : " rounded-md border bg-purple-600/20 border-purple-400/30 text-purple-200"}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translat-x-1/2">
                                    <span className="bg-white text-purple-800 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
                                        <Sparkles className="w-4 h-4"/>
                                        Most Popular
                                    </span>
                                </div>
                                )}

                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl font-bold">
                                        {plan.name}
                                    </CardTitle>
                                    <div className="mt-4">
                                        <span className="text-5xl font-bold">${plan.price}</span>
                                    </div>
                                    <p className="text-slate-200 mt-2 text-sm">
                                        {plan.description}
                                    </p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <ul className="space-y-3">
                                        {
                                            plan.features.map((feature,featureIndex)=>(
                                                <li key={featureIndex} className="flex items-center gap-3">
                                                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0"/>
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <Button className={`w-full font-semibold ${
                                        plan.popular
                                            ? "bg-indigo-500 hover:bg-indigo-600 text-white shadow-md"
                                            : "bg-purple-600/30 hover:bg-pruple-700/50 text-white border border-purple-400/20"
                                    }`}>
                                        {plan.buttonText}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}